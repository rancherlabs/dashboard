import { mount } from '@vue/test-utils';
import Settings from '@shell/edit/management.cattle.io.setting.vue';
import { SETTING } from '@shell/config/settings';

describe('management.cattle.io.setting should', () => {
  const requiredSetup = () => ({
    // Remove all these mocks after migration to Vue 2.7/3 due mixin logic
    mocks:     {
      $store: {
        getters: {
          currentStore:              () => 'current_store',
          'current_store/schemaFor': jest.fn(),
          'current_store/all':       jest.fn(),
          'i18n/t':                  jest.fn(),
          'i18n/exists':             jest.fn(),
        }
      },
      $route:  { query: { AS: '' } },
      $router: { applyQuery: jest.fn() },
    }
  });

  it('allowing to save if no rules in settings', () => {
    const wrapper = mount(Settings, {
      propsData: { value: { value: 'anything' } },
      data:      () => ({ setting: { } }),
      ...requiredSetup()
    });
    const saveButton = wrapper.find('[data-testid="form-save"]').element as HTMLInputElement;

    expect(saveButton.disabled).toBe(false);
  });

  describe('using predefined generic rule', () => {
    const id = SETTING.CATTLE_PASSWORD_MIN_LENGTH;

    describe('validate input with provided settings', () => {
      it('allowing to save if pass', () => {
        const wrapper = mount(Settings, {
          propsData: { value: { id, value: '3' } },
          ...requiredSetup()
        });
        const saveButton = wrapper.find('[data-testid="form-save"]').element as HTMLInputElement;

        expect(saveButton.disabled).toBe(false);
      });

      it('preventing to save if any error', () => {
        const wrapper = mount(Settings, {
          propsData: { value: { id, value: '1' } },
          ...requiredSetup()
        });
        const saveButton = wrapper.find('[data-testid="form-save"]').element as HTMLInputElement;

        expect(saveButton.disabled).toBe(true);
      });
    });

    it('retrieve correct rules based on settings', () => {
      const wrapper = mount(Settings, {
        propsData: { value: { id, value: '' } },
        ...requiredSetup()
      });
      const expectation = [{
        path:  'value.value',
        rules: ['minValue', 'maxValue']
      }];

      expect(wrapper.vm.$data['fvFormRuleSets']).toStrictEqual(expectation);
    });

    it('generate extra rules based on settings', () => {
      const wrapper = mount(Settings, {
        propsData: { value: { id, value: '' } },
        ...requiredSetup()
      });
      const expectation = ['minValue', 'maxValue'];

      // Avoid integration tests with mixin as it returns the whole function
      const rules = Object.keys((wrapper.vm as any)['fvExtraRules']);

      expect(rules).toStrictEqual(expectation);
    });
  });
});

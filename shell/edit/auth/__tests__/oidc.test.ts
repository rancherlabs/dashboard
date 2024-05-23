/* eslint-disable jest/no-hooks */
import { mount } from '@vue/test-utils';
import { _EDIT } from '@shell/config/query-params';

import oidc from '@shell/edit/auth/oidc.vue';

jest.mock('@shell/utils/clipboard', () => {
  return { copyTextToClipboard: jest.fn(() => Promise.resolve({})) };
});

const validClientId = 'rancheroidc';
const validClientSecret = 'TOkUxg0P67m1UXWNkJLHDPkUZFIKOWSq';
const validUrl = 'https://localhost:8080';
const validRealm = 'rancherrealm';
const validRancherUrl = 'https://localhost/verify-auth';
const validIssuer = 'http://localhost:8080/realms/rancherrealm';
const validAuthEndpoint = 'http://localhost:8080/realms/rancherrealm/protocol/openid-connect/auth';
const validScope = 'openid profile email';

const mockModel = {
  enabled:      false,
  id:           'oidc',
  rancherUrl:   validRancherUrl,
  issuer:       validIssuer,
  authEndpoint: validAuthEndpoint,
  scope:        validScope,
  clientId:     validClientId,
  clientSecret: validClientSecret,
  type:         'oidcConfig',
};

const mockedAuthConfigMixin = {
  data() {
    return {
      isEnabling:     false,
      editConfig:     false,
      model:          { mockModel },
      serverSetting:  null,
      errors:         [],
      originalModel:  null,
      principals:     [],
      authConfigName: 'oidc',
    };
  },
  computed: {},
  methods:  {}
};

describe('oidc.vue', () => {
  let wrapper: any;
  const requiredSetup = () => ({
    mixins: [mockedAuthConfigMixin],
    mocks:  {
      $fetchState: { pending: false },
      $store:      {
        getters: {
          currentStore:              () => 'current_store',
          'current_store/schemaFor': jest.fn(),
          'current_store/all':       jest.fn(),
          'i18n/t':                  (val: string) => val,
          'i18n/exists':             jest.fn(),
        },
        dispatch: jest.fn()
      },
      $route:  { query: { AS: '' }, params: { id: 'oicd' } },
      $router: { applyQuery: jest.fn() },
    },
    propsData: {
      value: { applicationSecret: '' },
      mode:  _EDIT,
    },
  });

  beforeEach(() => {
    wrapper = mount(oidc, { ...requiredSetup() });
  });
  afterEach(() => {
    wrapper.destroy();
  });

  it('have "Create" button disabled before fields are filled in', () => {
    const saveButton = wrapper.find('[data-testid="form-save"]').element as HTMLInputElement;

    expect(saveButton.disabled).toBe(true);
  });

  it('updates issuer endpoint when oidcUrls.url and oidcUrls.realm changes', async() => {
    wrapper.setData({ oidcUrls: { url: validUrl } });
    await wrapper.vm.$nextTick();

    expect(wrapper.vm.model.issuer).toBe(`${ validUrl }/auth/realms/`);

    wrapper.setData({ oidcUrls: { realm: validRealm } });
    await wrapper.vm.$nextTick();

    expect(wrapper.vm.model.issuer).toBe(`${ validUrl }/auth/realms/${ validRealm }`);
  });
});


import { mount } from '@vue/test-utils';
import { LabeledInput } from './index';

describe('component: LabeledInput', () => {
  it('should emit input only once', () => {
    const value = '2';
    const delay = 1;
    const wrapper = mount(LabeledInput, { propsData: { delay } });

    jest.useFakeTimers();
    wrapper.find('input').setValue('1');
    wrapper.find('input').setValue(value);
    jest.advanceTimersByTime(delay);
    jest.useRealTimers();

    expect(wrapper.emitted('input')).toHaveLength(1);
    /* eslint-disable @typescript-eslint/no-non-null-assertion */
    expect(wrapper.emitted('input')![0][0]).toBe(value);
  });
});

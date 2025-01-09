import { VueConstructor } from 'vue';

export const BadgeState: VueConstructor;
export const Banner: VueConstructor;
export const Card: VueConstructor;
export const Checkbox: VueConstructor;
export const LabeledInput: VueConstructor;
export const LabeledTooltip: VueConstructor;
export const RadioButton: VueConstructor;
export const RadioGroup: VueConstructor;
export const StringList: VueConstructor;
export const TextAreaAutoGrow: VueConstructor;
export const ToggleSwitch: VueConstructor;
export const RcDropdown: VueConstructor;
export const RcDropdownCollection: VueConstructor;
export const RcDropdownItem: VueConstructor;
export const RcDropdownSeparator: VueConstructor;
export const RcDropdownTrigger: VueConstructor;

type ArrayListRow = {
    value: string;
}

export type ArrayListData = {
    lastUpdateWasFromValue: boolean;
    rows: Array<ArrayListRow>,
}

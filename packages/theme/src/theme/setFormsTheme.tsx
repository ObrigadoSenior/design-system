import { setStylePerKey } from '.';
import {
  SetThemeProps,
  ThemeCheckboxProps,
  ThemeDropdownContentItemProps,
  ThemeDropdownContentProps,
  ThemeFormsProps,
  ThemeInputProps,
  ThemeRadioProps,
} from '../types';

export const setFormsTheme = ({ data }: SetThemeProps<ThemeFormsProps>): void => {
  const { checkbox, dropdown, input, radio } = data || {};
  checkbox && setStylePerKey<ThemeCheckboxProps>('checkbox', checkbox);
  input && setStylePerKey<ThemeInputProps>('input', input);
  radio && setStylePerKey<ThemeRadioProps>('radio', radio);
  dropdown?.content && setStylePerKey<ThemeDropdownContentProps>('dropdown-content', dropdown.content);
  if (dropdown?.items) {
    for (const key in dropdown?.items) {
      setStylePerKey<ThemeDropdownContentItemProps>(`dropdown-content-item-${key}`, dropdown.items[key]);
    }
  }
};

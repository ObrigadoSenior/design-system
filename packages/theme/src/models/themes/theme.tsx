import { ThemeButtonProps } from './button';
import { ThemeCheckboxProps } from './checkbox';
import { ThemeMetricsProps } from './metrics';
import { ThemeInputProps } from './input';
import { ThemeRadioProps } from './radio';
import { ThemeDropdownProps } from './dropdown';
import { ThemeTextProps } from './text';
import { ThemeModalProps } from './modal';
import { ThemeSystemProps } from './system';
import { ThemeIconProps } from './icon';

export type ThemeProps = {
  metrics?: ThemeMetricsProps;
  button?: {
    primary?: ThemeButtonProps;
    flat?: ThemeButtonProps;
    secondary?: ThemeButtonProps;
    badge?: ThemeButtonProps;
    icon?: ThemeButtonProps;
  };
  input?: ThemeInputProps;
  text?: ThemeTextProps;
  selectors?: {
    checkbox?: ThemeCheckboxProps;
    radio?: ThemeRadioProps;
  };
  dropdown?: ThemeDropdownProps;
  modal?: ThemeModalProps;
  system?: ThemeSystemProps;
  icon?: ThemeIconProps;
};

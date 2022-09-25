import { ThemeCheckboxProps } from '../models';

interface ISetCheckboxTheme {
  checkbox: ThemeCheckboxProps;
  style: CSSStyleDeclaration;
}

export const setCheckboxTheme = ({ checkbox, style }: ISetCheckboxTheme): void => {
  if (checkbox && style) {
    style.setProperty('--checkbox-bg-color', checkbox.backgroundColor);
    style.setProperty('--checkbox-border-color', checkbox.borderColor);
    style.setProperty('--checkbox-border-radius', checkbox.borderRadius);
    style.setProperty('--checkbox-checkmark-color', checkbox.checkmarkColor);
    style.setProperty('--checkbox-checkmark-disabled-bg-color', checkbox.disabledBackgroundColor);
    style.setProperty('--checkbox-checkmark-disabled-border-color', checkbox.disabledBorderColor);
    style.setProperty('--checkbox-disabled-label-color', checkbox.disabledLabelColor);
    style.setProperty('--checkbox-hover-color', checkbox.hoverColor);
    style.setProperty('--checkbox-label-color', checkbox.labelColor);
  }
};

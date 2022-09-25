import { ThemeInputProps } from '../models';

interface ISetInputTheme {
  input: ThemeInputProps;
  style: CSSStyleDeclaration;
}

export const setInputTheme = ({ input, style }: ISetInputTheme): void => {
  if (input && style) {
    style.setProperty('--input-bg-color', input.backgroundColor);
    style.setProperty('--input-border-color', input.borderColor);
    style.setProperty('--input-text-color', input.textColor);
    style.setProperty('--input-border-radius', input.borderRadius);
    style.setProperty('--input-no-icon-padding', input.padding.noIcon);
    style.setProperty('--input-with-icon-padding', input.padding.withIcon);
    style.setProperty('--input-title-color', input.titleColor);
    style.setProperty('--input-placeholder-color', input.placeholderColor);
    style.setProperty('--input-disabled-title-color', input.disabledTitleColor);
    style.setProperty('--input-disabled-bg-color', input.disabledBackgroundColor);
    style.setProperty('--input-disabled-border-color', input.disabledBorderColor);
    style.setProperty('--input-disabled-text-color', input.disabledTextColor);
  }
};

import { ThemeRadioProps } from '../models';

interface ISetRadioTheme {
  radio: ThemeRadioProps;
  style: CSSStyleDeclaration;
}

export const setRadioTheme = ({ radio, style }: ISetRadioTheme): void => {
  if (radio && style) {
    style.setProperty('--radio-bg-color', radio.backgroundColor);
    style.setProperty('--radio-border-color', radio.borderColor);
    style.setProperty('--radio-border-radius', radio.borderRadius);
    style.setProperty('--radio-checkmark-color', radio.checkmarkColor);
    style.setProperty('--radio-checkmark-disabled-bg-color', radio.disabledBackgroundColor);
    style.setProperty('--radio-checkmark-disabled-border-color', radio.disabledBorderColor);
    style.setProperty('--radio-disabled-label-color', radio.disabledLabelColor);
    style.setProperty('--radio-hover-color', radio.hoverColor);
    style.setProperty('--radio-label-color', radio.labelColor);
  }
};

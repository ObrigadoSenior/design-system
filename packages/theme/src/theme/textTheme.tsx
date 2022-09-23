import { ThemeTextProps } from '../models';

interface ISetTextTheme {
  text: ThemeTextProps;
  style: CSSStyleDeclaration;
}

export const setTextTheme = ({ text, style }: ISetTextTheme): void => {
  if (text && style) {
    style.setProperty('--text-color-disabled', text.disabledColor);
    style.setProperty('--text-color-primary', text.primaryColor);
    style.setProperty('--text-color-secondary', text.secondaryColor);
    style.setProperty('--text-size-xs', text.fontSizeXs);
    style.setProperty('--text-size-s', text.fontSizeS);
    style.setProperty('--text-size-m', text.fontSizeM);
    style.setProperty('--text-size-l', text.fontSizeL);
    style.setProperty('--text-size-xl', text.fontSizeXl);
    style.setProperty('--text-weight-light', text.fontWeightLight);
    style.setProperty('--text-weight-medium', text.fontWeightMedium);
    style.setProperty('--text-weight-bold', text.fontWeightBold);
  }
};

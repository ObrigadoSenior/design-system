import { ITheme } from '../models';

interface ISetTextTheme {
  text: ITheme['text'];
  style: CSSStyleDeclaration;
}

export const setTextTheme = ({ text, style }: ISetTextTheme): void => {
  if (text && style) {
    style.setProperty('--text-disabled-color', text.disabledColor);
    style.setProperty('--text-primary-color', text.primaryColor);
    style.setProperty('--text-secondary-color', text.secondaryColor);
    style.setProperty('--text-size-xs', text.fontSizeXs);
    style.setProperty('--text-size-s', text.fontSizeS);
    style.setProperty('--text-size-m', text.fontSizeM);
    style.setProperty('--text-size-l', text.fontSizeL);
    style.setProperty('--text-size-xl', text.fontSizeXl);
    style.setProperty('--text-font-weight-light', text.fontWeightLight);
    style.setProperty('--text-font-weight-regular', text.fontWeightRegular);
    style.setProperty('--text-font-weight-medium', text.fontWeightMedium);
    style.setProperty('--text-font-weight-bold', text.fontWeightBold);
  }
};

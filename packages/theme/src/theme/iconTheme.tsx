import { ITheme } from '../models';

interface SetIconTheme {
  icon: ITheme['icon'];
  style: CSSStyleDeclaration;
}

export const setIconTheme = ({ icon, style }: SetIconTheme): void => {
  if (icon && style) {
    style.setProperty('--icon-color-disabled', icon.disabledColor);
    style.setProperty('--icon-color-primary', icon.primaryColor);
    style.setProperty('--icon-color-secondary', icon.secondaryColor);
    style.setProperty('--icon-size-xs', icon.sizeXs);
    style.setProperty('--icon-size-s', icon.sizeS);
    style.setProperty('--icon-size-m', icon.sizeM);
    style.setProperty('--icon-size-l', icon.sizeL);
    style.setProperty('--icon-size-xl', icon.sizeXl);
  }
};

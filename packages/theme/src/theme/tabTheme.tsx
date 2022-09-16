import { ITheme } from '../models';

interface ISetTabTheme {
  tab: ITheme['tab'];
  style: CSSStyleDeclaration;
}

export const setTabTheme = ({ tab, style }: ISetTabTheme): void => {
  if (tab && style) {
    style.setProperty('--tab-disabled-color', tab.disabledColor);
    style.setProperty('--tab-color', tab.color);
    style.setProperty('--tab-active-color', tab.activeColor);
    style.setProperty('--tab-border-color', tab.borderColor);
    style.setProperty('--tab-gap', tab.gap);
    style.setProperty('--tab-border-width', tab.borderWidth);
  }
};

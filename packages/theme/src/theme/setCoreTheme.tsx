import { setStyle } from '.';
import { SetThemeProps, ThemeCoreProps } from '../types';

export const setCoreTheme = ({ data }: SetThemeProps<ThemeCoreProps>): void => {
  const { button, icon, text } = data || {};
  if (button) {
    for (const key in button) {
      setStyle(`--button-${key}-color`, button[key]['textColor']);
      setStyle(`--button-${key}-bg-color`, button[key]['backgroundColor']);
      setStyle(`--button-${key}-border-color`, button[key]['borderColor']);
      setStyle(`--button-${key}-border-radius`, button[key]['borderRadius']);
      setStyle(`--button-${key}-padding`, button[key]['padding']);
    }
  }
  if (icon) {
    setStyle('--icon-disabled-color', icon.disabledColor);
    setStyle('--icon-primary-color', icon.primaryColor);
    setStyle('--icon-secondary-color', icon.secondaryColor);
    setStyle('--icon-size-xs', icon.sizeXs);
    setStyle('--icon-size-s', icon.sizeS);
    setStyle('--icon-size-m', icon.sizeM);
    setStyle('--icon-size-l', icon.sizeL);
    setStyle('--icon-size-xl', icon.sizeXl);
  }
  if (text) {
    setStyle('--text-disabled-color', text.disabledColor);
    setStyle('--text-primary-color', text.primaryColor);
    setStyle('--text-secondary-color', text.secondaryColor);
    setStyle('--text-size-xs', text.fontSizeXs);
    setStyle('--text-size-s', text.fontSizeS);
    setStyle('--text-size-m', text.fontSizeM);
    setStyle('--text-size-l', text.fontSizeL);
    setStyle('--text-size-xl', text.fontSizeXl);
    setStyle('--text-weight-light', text.fontWeightLight);
    setStyle('--text-weight-medium', text.fontWeightMedium);
    setStyle('--text-weight-bold', text.fontWeightBold);
  }
};

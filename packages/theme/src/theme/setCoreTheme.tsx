import { setStylePerKey } from '.';
import { SetThemeProps, ThemeButtonProps, ThemeCoreProps, ThemeIconProps, ThemeTextProps } from '../types';

export const setCoreTheme = ({ data }: SetThemeProps<ThemeCoreProps>): void => {
  const { button, icon, text } = data || {};
  if (button) {
    for (const key in button) {
      setStylePerKey<ThemeButtonProps>(`button-${key}`, button[key]);
    }
  }
  icon && setStylePerKey<ThemeIconProps>('icon', icon);
  text && setStylePerKey<ThemeTextProps>('text', text);
};

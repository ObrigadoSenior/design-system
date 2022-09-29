import { setStylePerKey } from '.';
import { SetThemeProps, ThemeColorsProps, ThemeDefaultProps, ThemeSizeProps } from '../types';

export const setDefaultTheme = ({ data }: SetThemeProps<ThemeDefaultProps>): void => {
  const { colors, sizes } = data || {};
  colors && setStylePerKey<ThemeColorsProps>('system-color', colors);
  sizes && setStylePerKey<ThemeSizeProps>('system-size', sizes);
};

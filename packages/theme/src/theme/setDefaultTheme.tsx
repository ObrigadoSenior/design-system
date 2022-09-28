import { setStyle } from '.';
import { SetThemeProps, ThemeDefaultProps } from '../types';

export const setDefaultTheme = ({ data }: SetThemeProps<ThemeDefaultProps>): void => {
  const { colors, sizes } = data || {};
  if (colors) {
    setStyle('--system-background-color', colors.background);
    setStyle('--system-primary-color', colors.primary);
    setStyle('--system-secondary-color', colors.secondary);
    setStyle('--system-secondary-accent-color', colors.secondaryAccent);
    setStyle('--system-primary-accent-color', colors.primaryAccent);
  }
  if (sizes) {
    setStyle('--system-size-none', sizes.none);
    setStyle('--system-size-xs', sizes.xs);
    setStyle('--system-size-s', sizes.s);
    setStyle('--system-size-m', sizes.m);
    setStyle('--system-size-l', sizes.l);
    setStyle('--system-size-xl', sizes.xl);
  }
};

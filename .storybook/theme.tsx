import { AddTheme, darkPalette, defaultTheme, lightPalette, ThemeSizeProps } from '@obrigadosenior/theme';

const sizes: ThemeSizeProps = {
  none: `0`,
  xs: `0.25em`,
  s: `0.75em`,
  m: `1.5em`,
  l: `2.5em`,
  xl: `4.5em`,
};

export const SetTheme = (name: 'light' | 'dark') => {
  const col = name === 'dark' ? darkPalette : lightPalette;
  const theme = defaultTheme({ colors: col, sizes });
  return AddTheme({ theme });
};

import { AddTheme, darkPalette, defaultTheme, lightPalette, ThemeSizeProps } from '@obrigadosenor/theme';

const sizes: ThemeSizeProps = {
  none: `0`,
  xs: `0.5rem`,
  s: `0.75rem`,
  m: `1.25rem`,
  l: `2rem`,
  xl: `3rem`,
};

export const SetTheme = (name: 'light' | 'dark') => {
  const col = name === 'dark' ? darkPalette : lightPalette;
  const theme = defaultTheme({ colors: col, sizes });
  return AddTheme({ theme });
};

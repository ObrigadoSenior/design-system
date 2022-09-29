export type ThemeColorsProps = {
  bg: string;
  primary: string;
  secondary: string;
  accent: string;
  disabled: string;
};

export type ThemeSizeProps = {
  none: string;
  xs: string;
  s: string;
  m: string;
  l: string;
  xl: string;
};

export type ThemeDefaultProps = {
  colors?: ThemeColorsProps;
  sizes?: ThemeSizeProps;
};

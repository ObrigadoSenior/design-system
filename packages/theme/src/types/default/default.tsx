export type ThemeColorsProps = {
  background: string;
  primary: string;
  secondary: string;
  primaryAccent: string;
  secondaryAccent: string;
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
  colors: ThemeColorsProps;
  sizes: ThemeSizeProps;
};

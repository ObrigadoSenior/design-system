export type ThemeButtonProps = {
  backgroundColor: string;
  borderColor: string;
  textColor: string;
  borderRadius: string;
  padding: string;
};

export type ThemeIconProps = {
  disabledColor: string;
  primaryColor: string;
  secondaryColor: string;
  sizeXs: string;
  sizeS: string;
  sizeM: string;
  sizeL: string;
  sizeXl: string;
};

export type ThemeTextProps = {
  disabledColor: string;
  primaryColor: string;
  secondaryColor: string;
  fontSizeXs: string;
  fontSizeS: string;
  fontSizeM: string;
  fontSizeL: string;
  fontSizeXl: string;
  fontWeightLight: string;
  fontWeightMedium: string;
  fontWeightBold: string;
};

export type ThemeCoreProps = {
  button?: {
    primary?: ThemeButtonProps;
    secondary?: ThemeButtonProps;
    icon?: ThemeButtonProps;
  };
  text?: ThemeTextProps;
  icon?: ThemeIconProps;
};

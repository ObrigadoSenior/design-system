import { ThemeCoreProps, ThemeDefaultProps } from '../../types';

export const defaultCoreTheme = ({ colors, sizes }: Required<ThemeDefaultProps>): ThemeCoreProps => {
  const { bg, primary, secondary, accent, disabled } = colors;
  const { xs, s, m, l, xl } = sizes;

  return {
    button: {
      primary: {
        bgColor: primary,
        borderColor: primary,
        borderRadius: xs,
        padding: `${s} ${m}`,
        textColor: bg,
      },
      secondary: {
        bgColor: bg,
        borderColor: primary,
        borderRadius: xs,
        padding: `${s} ${m}`,
        textColor: secondary,
      },
      icon: {
        bgColor: primary,
        borderColor: primary,
        borderRadius: xl,
        padding: s,
        textColor: bg,
      },
    },
    text: {
      primaryColor: primary,
      secondaryColor: secondary,
      disabledColor: disabled,
      fontSizeXs: '0.75rem',
      fontSizeS: '0.95rem',
      fontSizeM: '1.15rem',
      fontSizeL: '1.45rem',
      fontSizeXl: '2rem',
      fontWeightLight: '200',
      fontWeightMedium: '400',
      fontWeightBold: '700',
    },
    icon: {
      primaryColor: primary,
      secondaryColor: secondary,
      disabledColor: disabled,
      sizeXs: xs,
      sizeS: s,
      sizeM: m,
      sizeL: l,
      sizeXl: xl,
    },
  };
};

import {
  AddTheme,
  ThemeColorsProps,
  ThemeCoreProps,
  ThemeFormsProps,
  ThemeProps,
  ThemeSizeProps,
} from '@obrigadosenior/theme';

const sizes: ThemeSizeProps = {
  none: `0`,
  xs: `0.25em`,
  s: `0.75em`,
  m: `1.5em`,
  l: `2.5em`,
  xl: `4.5em`,
};

const width = {
  min: '300px',
  max: '1170px',
};

const defaultBtn = {
  borderRadius: '3px',
  padding: `0.5em 2em`,
};

const button = {
  primary: {
    ...defaultBtn,
    bgColor: 'purple',
    borderColor: 'yellow',
    textColor: 'white',
  },
  secondary: {
    ...defaultBtn,
    bgColor: 'green',
  },
  icon: {
    ...defaultBtn,
    bgColor: 'pink',
    padding: `1em`,
    borderRadius: '50%',
  },
} as ThemeCoreProps['button'];

const icon = {
  primaryColor: 'red',
  secondaryColor: 'green',
  disabledColor: 'grey',
  sizeXs: '1em',
  sizeS: '2em',
  sizeM: '3em',
  sizeL: '4em',
  sizeXl: '5em',
} as ThemeCoreProps['icon'];

const colors: ThemeColorsProps = {
  primary: '#f8f8f8',
  secondary: '#4a4a4a',
  bg: 'rgb(31, 32, 35)',
  primaryAccent: 'rgb(40, 40, 40)',
  secondaryAccent: 'rgb(90, 90, 90)',
};

const { primary, secondary, bg, primaryAccent, secondaryAccent } = colors;

export const forms: ThemeFormsProps = {
  input: {
    bgColor: bg,
    textColor: primary,
    borderColor: primaryAccent,
    borderRadius: sizes.s,
    disabledBgColor: secondaryAccent,
    disabledTextColor: primaryAccent,
    disabledBorderColor: secondaryAccent,
    disabledTitleColor: primaryAccent,
    titleColor: primary,
    placeholderColor: primaryAccent,
    paddingWithoutIcon: sizes.s,
    paddingWithIcon: sizes.l,
  },
  checkbox: {
    bgColor: bg,
    disabledBgColor: primaryAccent,
    checkmarkColor: bg,
    hoverColor: primaryAccent,
    labelColor: primary,
    disabledLabelColor: primaryAccent,
    borderRadius: sizes.xs,
    borderColor: primaryAccent,
    disabledBorderColor: primaryAccent,
  },
  radio: {
    bgColor: bg,
    disabledBgColor: primaryAccent,
    checkmarkColor: bg,
    hoverColor: primaryAccent,
    labelColor: primary,
    disabledLabelColor: primaryAccent,
    borderRadius: sizes.xl,
    borderColor: primaryAccent,
    disabledBorderColor: primaryAccent,
  },
  dropdown: {
    content: {
      borderRadius: sizes.s,
      height: '300px',
      transitionSpeed: '0.5s',
      bgColor: bg,
    },
    items: {
      neutral: {
        bgColor: bg,
        borderColor: bg,
        textColor: primary,
        iconColor: primary,
        height: '40px',
      },
      active: {
        bgColor: bg,
        borderColor: bg,
        textColor: bg,
        iconColor: bg,
        height: '40px',
      },
      disabled: {
        bgColor: secondaryAccent,
        borderColor: secondaryAccent,
        textColor: secondaryAccent,
        iconColor: secondaryAccent,
        height: '40px',
      },
    },
  },
};

export const light: ThemeProps = {
  sizes,
  colors: {
    primary: '#161717',
    secondary: '#fcfcfc',
    bg: 'rgb(255, 254, 254)',
    primaryAccent: 'rgb(240, 240, 240)',
    secondaryAccent: 'rgb(245, 245, 245)',
  },
  core: {
    text: {
      primaryColor: primary,
      secondaryColor: secondary,
      disabledColor: 'grey',
      fontSizeXs: '0.75rem',
      fontSizeS: '0.95rem',
      fontSizeM: '1.15rem',
      fontSizeL: '1.45rem',
      fontSizeXl: '2rem',
      fontWeightLight: '200',
      fontWeightMedium: '400',
      fontWeightBold: '700',
    },
    button,
    icon,
  },
  forms,
};

export const dark: ThemeProps = {
  sizes,
  colors,
  core: {
    text: {
      primaryColor: primary,
      secondaryColor: secondary,
      disabledColor: 'grey',
      fontSizeXs: '0.75rem',
      fontSizeS: '0.95rem',
      fontSizeM: '1.15rem',
      fontSizeL: '1.45rem',
      fontSizeXl: '2rem',
      fontWeightLight: '200',
      fontWeightMedium: '400',
      fontWeightBold: '700',
    },
    button,
    icon,
  },
  forms,
};

export const SetTheme = (name: 'light' | 'dark') => {
  return AddTheme({ theme: name === 'dark' ? dark : light });
};

import { AddTheme, ThemeProps } from '@obrigadosenior/theme';

const sizes = {
  sizeNone: `0`,
  sizeXs: `0.25em`,
  sizeS: `0.75em`,
  sizeM: `1.5em`,
  sizeL: `2.5em`,
  sizeXl: `4.5em`,
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
    backgroundColor: 'purple',
  },
  secondary: {
    ...defaultBtn,
    backgroundColor: 'green',
  },
  flat: {
    ...defaultBtn,
    backgroundColor: 'blue',
  },
  badge: {
    ...defaultBtn,
    backgroundColor: 'yellow',
  },
  icon: {
    ...defaultBtn,
    backgroundColor: 'pink',
    padding: `1em`,
    borderRadius: '50%',
  },
} as ThemeProps['button'];

const icon = {
  primaryColor: 'red',
  secondaryColor: 'green',
  disabledColor: 'grey',
  sizeXs: '1em',
  sizeS: '2em',
  sizeM: '3em',
  sizeL: '4em',
  sizeXl: '5em',
} as ThemeProps['icon'];

const modal = {
  backgroundColor: 'red',
  borderColor: 'blue',
  borderRadius: `6px`,
  color: 'black',
  padding: `15px`,
  shadow: 'yellow',
  transitionSpeed: '500ms',
  overlayColor: 'rgba(0,0,0,0.25)',
} as ThemeProps['modal'];

const system: ThemeProps['system'] = {
  colors: {
    primary: '#f8f8f8',
    secondary: '#4a4a4a',
    background: 'rgb(31, 32, 35)',
    primaryAccent: 'rgb(40, 40, 40)',
    secondaryAccent: 'rgb(90, 90, 90)',
  },
};

const { primary, secondary, background, primaryAccent, secondaryAccent } = system.colors;

export const forms: ThemeProps = {
  input: {
    backgroundColor: background,
    textColor: primary,
    borderColor: primaryAccent,
    borderRadius: sizes.sizeS,
    disabledBackgroundColor: secondaryAccent,
    disabledTextColor: primaryAccent,
    disabledBorderColor: secondaryAccent,
    disabledTitleColor: primaryAccent,
    titleColor: primary,
    placeholderColor: primaryAccent,
    padding: {
      noIcon: sizes.sizeS,
      withIcon: sizes.sizeL,
    },
  },
  selectors: {
    checkbox: {
      backgroundColor: background,
      disabledBackgroundColor: primaryAccent,
      checkmarkColor: background,
      hoverColor: primaryAccent,
      labelColor: primary,
      disabledLabelColor: primaryAccent,
      borderRadius: sizes.sizeXs,
      borderColor: primaryAccent,
      disabledBorderColor: primaryAccent,
    },
    radio: {
      backgroundColor: background,
      disabledBackgroundColor: primaryAccent,
      checkmarkColor: background,
      hoverColor: primaryAccent,
      labelColor: primary,
      disabledLabelColor: primaryAccent,
      borderRadius: sizes.sizeXl,
      borderColor: primaryAccent,
      disabledBorderColor: primaryAccent,
    },
  },
  dropdown: {
    content: {
      borderRadius: sizes.sizeS,
      height: '300px',
      transitionSpeed: '0.5s',
      backgroundColor: background,
      item: {
        height: '40px',
        neutral: {
          backgroundColor: background,
          borderColor: background,
          textColor: primary,
          iconColor: primary,
        },
        active: {
          backgroundColor: background,
          borderColor: background,
          textColor: background,
          iconColor: background,
        },
        disabled: {
          backgroundColor: secondaryAccent,
          borderColor: secondaryAccent,
          textColor: secondaryAccent,
          iconColor: secondaryAccent,
        },
      },
    },
  },
};

export const light: ThemeProps = {
  metrics: {
    sizes,
    width,
  },
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
  modal,
  system: {
    colors: {
      primary: '#161717',
      secondary: '#fcfcfc',
      background: 'rgb(255, 254, 254)',
      primaryAccent: 'rgb(240, 240, 240)',
      secondaryAccent: 'rgb(245, 245, 245)',
    },
  },
  ...forms,
};

export const dark: ThemeProps = {
  metrics: {
    sizes,
    width,
  },
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
  modal,
  system,
  ...forms,
};

export const SetTheme = (name: 'light' | 'dark') => {
  return AddTheme({ theme: name === 'dark' ? dark : light });
};

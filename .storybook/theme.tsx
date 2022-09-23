import { AddTheme, ITheme } from '@obrigadosenior/theme';

const defaultBtn = {
  borderRadius: '3px',
  padding: `0.5em 2em`,
};

const button = {
  primary: {
    ...defaultBtn,
    backgroundColor: 'red',
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
} as ITheme['button'];

const icon = {
  primaryColor: 'red',
  secondaryColor: 'green',
  disabledColor: 'grey',
  sizeXs: '1em',
  sizeS: '2em',
  sizeM: '3em',
  sizeL: '4em',
  sizeXl: '5em',
} as ITheme['icon'];

export const theme: ITheme = {
  text: {
    primaryColor: 'black',
    secondaryColor: 'green',
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
};

export const SetTheme = () => AddTheme({ theme });

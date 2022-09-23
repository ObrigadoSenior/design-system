import { ThemeProps } from '@obrigadosenior/theme';
import { fontSize, travelColors, fontWeight, sizes, metrics } from '../../../../travelTheme';

const { modernRed, modernBlue, himmel, tjara, silver, silverLight, moln } = travelColors || {};
const { none, xsmall, small, medium, large, xlarge } = sizes || {};
const { light: fwLight, regular: fwRegular, medium: fwMedium, bold: fwBold } = fontWeight || {};
const { xs, s, m, l, xl } = fontSize || {};

export const coreTheme: ThemeProps = {
  metrics,
  button: {
    primary: {
      backgroundColor: modernRed,
      textColor: moln,
      borderColor: modernRed,
      borderRadius: `${large}px`,
      padding: `${xsmall}px ${small}px`,
    },
    flat: {
      backgroundColor: 'transparent',
      textColor: modernBlue,
      borderColor: 'transparent',
      borderRadius: `${none}px`,
      padding: `${none}px ${none}px`,
    },
    secondary: {
      backgroundColor: moln,
      textColor: tjara,
      borderColor: tjara,
      borderRadius: `${small}px`,
      padding: `${xsmall}px ${small}px`,
    },
    badge: {
      backgroundColor: modernBlue,
      textColor: moln,
      borderColor: modernBlue,
      borderRadius: `${small}px`,
      padding: `${xsmall}px ${xsmall}px`,
    },
    icon: {
      backgroundColor: himmel,
      textColor: modernBlue,
      borderColor: himmel,
      borderRadius: `${xlarge}px`,
      padding: `${xsmall}px`,
    },
  },
  text: {
    primaryColor: tjara,
    secondaryColor: moln,
    disabledColor: silver,
    fontSizeXs: xs,
    fontSizeS: s,
    fontSizeM: m,
    fontSizeL: l,
    fontSizeXl: xl,
    fontWeightLight: `${fwLight}`,
    fontWeightMedium: `${fwMedium}`,
    fontWeightBold: `${fwBold}`,
  },
};

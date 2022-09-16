import { ITheme } from '@obrigado-senior/theme';
import { fontSize, travelColors, fontWeight, sizes, metrics } from '../../../../travelTheme';

const { modernRed, modernBlue, himmel, tjara, silver, silverLight, moln } = travelColors || {};
const { none, xxxsmall, xxsmall, xsmall, small, medium, large, xlarge } = sizes || {};
const { light: fwLight, regular: fwRegular, medium: fwMedium, bold: fwBold } = fontWeight || {};
const { xxxs, xxs, xs, s, m, l, xl, xxl } = fontSize || {};

export const coreTheme: ITheme = {
  metrics,
  button: {
    primary: {
      backgroundColor: modernRed,
      textColor: moln,
      borderColor: modernRed,
      borderRadius: `${large}px`,
      padding: `${xxsmall}px ${small}px`,
      height: `${xlarge}px`,
    },
    flat: {
      backgroundColor: 'transparent',
      textColor: modernBlue,
      borderColor: 'transparent',
      borderRadius: `${none}px`,
      padding: `${none}px ${none}px`,
      height: `${small}px`,
    },
    secondary: {
      backgroundColor: moln,
      textColor: tjara,
      borderColor: tjara,
      borderRadius: `${small}px`,
      padding: `${xxsmall}px ${small}px`,
      height: `${xlarge}px`,
    },
    badge: {
      backgroundColor: modernBlue,
      textColor: moln,
      borderColor: modernBlue,
      borderRadius: `${small}px`,
      padding: `${xxsmall}px ${xsmall}px`,
      height: `${small}px`,
    },
    icon: {
      backgroundColor: himmel,
      textColor: modernBlue,
      borderColor: himmel,
      borderRadius: `${xlarge}px`,
      padding: `${xsmall}px`,
      height: `${medium}px`,
    },
  },
  text: {
    primaryColor: tjara,
    secondaryColor: moln,
    disabledColor: silver,
    fontSizeXxxs: xxxs,
    fontSizeXxs: xxs,
    fontSizeXs: xs,
    fontSizeS: s,
    fontSizeM: m,
    fontSizeL: l,
    fontSizeXl: xl,
    fontSizeXxl: xxl,
    fontWeightLight: `${fwLight}`,
    fontWeightRegular: `${fwRegular}`,
    fontWeightMedium: `${fwMedium}`,
    fontWeightBold: `${fwBold}`,
  },
  image: {
    borderRadius: `${xsmall}px`,
  },
  price: {
    padding: `${xxsmall}px`,
  },
};

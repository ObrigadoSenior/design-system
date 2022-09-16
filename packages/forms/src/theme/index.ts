import { ITheme } from '@obrigado-senior/theme';
import { travelColors, sizes, metrics } from '../../../../travelTheme';

const { modernRed, tjara, silver, silverLight, moln } = travelColors || {};
const { xxsmall, small, large, xxlarge } = sizes || {};

export const formsTheme: ITheme = {
  metrics,
  input: {
    backgroundColor: moln,
    textColor: tjara,
    borderColor: silver,
    borderRadius: `${xxsmall}px`,
    disabledBackgroundColor: silverLight,
    disabledTextColor: silver,
    disabledBorderColor: silverLight,
    disabledTitleColor: silver,
    titleColor: tjara,
    placeholderColor: silver,
    padding: {
      noIcon: `${small}px`,
      withIcon: `${large}px`,
    },
  },
  selectors: {
    checkbox: {
      backgroundColor: modernRed,
      disabledBackgroundColor: silver,
      checkmarkColor: moln,
      hoverColor: silver,
      labelColor: tjara,
      disabledLabelColor: silver,
      borderRadius: `${xxsmall}px`,
      borderColor: silver,
      disabledBorderColor: silver,
    },
    radio: {
      backgroundColor: modernRed,
      disabledBackgroundColor: silver,
      checkmarkColor: moln,
      hoverColor: silver,
      labelColor: tjara,
      disabledLabelColor: silver,
      borderRadius: `${xxlarge}px`,
      borderColor: silver,
      disabledBorderColor: silver,
    },
  },
  dropdown: {
    content: {
      borderRadius: `${xxsmall}px`,
      height: '300px',
      transitionSpeed: '0.5s',
      backgroundColor: moln,
      item: {
        height: '40px',
        neutral: {
          backgroundColor: moln,
          borderColor: moln,
          textColor: tjara,
          iconColor: tjara,
        },
        active: {
          backgroundColor: modernRed,
          borderColor: modernRed,
          textColor: moln,
          iconColor: moln,
        },
        disabled: {
          backgroundColor: silverLight,
          borderColor: silverLight,
          textColor: silverLight,
          iconColor: silverLight,
        },
      },
    },
  },
};

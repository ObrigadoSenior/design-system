import { ITheme } from '@obrigadosenior/theme';
import { travelColors, sizes, metrics } from '../../../../travelTheme';

const { modernRed, snackskal, tjara, silver, silverLight, moln } = travelColors || {};
const { xsmall } = sizes || {};

export const calendarTheme: ITheme = {
  metrics,
  datePicker: {
    borderColor: silver,
    borderRadius: `${xsmall}px`,
    month: {
      button: {
        borderColor: silver,
        backgroundColor: moln,
        disabledBackgroundColor: silverLight,
        iconColor: tjara,
        disabledIconColor: silver,
        iconSize: '40px',
      },
      textColor: tjara,
      textSize: '18px',
      yearSize: '20px',
    },
    week: {
      textSize: '14px',
      textColor: tjara,
      shadow: silver,
    },
    day: {
      borderRadius: '6px',
      gap: '1px',
      width: '50px',
      active: {
        backgroundColor: moln,
        textColor: tjara,
        borderColor: silverLight,
      },
      activeMonth: {
        backgroundColor: silverLight,
        textColor: tjara,
        borderColor: silverLight,
      },
      disabled: {
        backgroundColor: moln,
        textColor: silver,
        borderColor: silverLight,
      },
      selected: {
        backgroundColor: modernRed,
        textColor: moln,
        borderColor: modernRed,
      },
      selectedRange: {
        backgroundColor: snackskal,
        textColor: modernRed,
        borderColor: snackskal,
      },
      monthBreak: {
        backgroundColor: modernRed,
        textColor: moln,
        borderColor: modernRed,
      },
    },
  },
};

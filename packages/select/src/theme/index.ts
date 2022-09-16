import { ITheme } from '@obrigado-senior/theme';
import { travelColors, sizes, metrics } from '../../../../travelTheme';

const { modernRed, tjara, silver, silverLight } = travelColors || {};
const { xxxsmall, small } = sizes || {};

export const selectTheme: ITheme = {
  metrics,
  tab: {
    color: tjara,
    disabledColor: silverLight,
    activeColor: modernRed,
    borderColor: silver,
    gap: `${small}px`,
    borderWidth: `${xxxsmall}px`,
  },
};

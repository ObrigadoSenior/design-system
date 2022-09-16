import { ITheme } from '@obrigado-senior/theme';
import { travelColors, sizes, metrics } from '../../../../travelTheme';

const { tjara, silver, moln } = travelColors || {};
const { xsmall, small } = sizes || {};

export const systemTheme: ITheme = {
  metrics,
  modal: {
    backgroundColor: moln,
    borderColor: silver,
    borderRadius: `${xsmall}px`,
    color: tjara,
    padding: `${small}px`,
    shadow: silver,
    transitionSpeed: '500ms',
    overlayColor: 'rgba(0,0,0,0.25)',
  },
};

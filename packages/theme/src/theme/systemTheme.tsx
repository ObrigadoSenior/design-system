import { TThemeSystem } from '../models';

interface ISetSystemTheme {
  system: TThemeSystem;
  style: CSSStyleDeclaration;
}

export const setSystemTheme = ({ system, style }: ISetSystemTheme): void => {
  if (system && style) {
    const { colors } = system;
    if (colors) {
      style.setProperty('--system-background-color', colors.background);
    }
  }
};

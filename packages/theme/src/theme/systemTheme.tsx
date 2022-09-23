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
      style.setProperty('--system-primary-color', colors.primary);
      style.setProperty('--system-secondary-color', colors.secondary);
      style.setProperty('--system-secondary-accent-color', colors.secondaryAccent);
      style.setProperty('--system-primary-accent-color', colors.primaryAccent);
    }
  }
};

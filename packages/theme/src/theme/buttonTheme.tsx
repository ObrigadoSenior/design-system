import { ThemeProps } from '../models';

interface ISetButtonTheme {
  button: ThemeProps['button'];
  style: CSSStyleDeclaration;
}

export const setButtonTheme = ({ button, style }: ISetButtonTheme): void => {
  if (button && style) {
    const { primary, flat, secondary, badge, icon } = button;
    /* Primary */
    if (primary) {
      style.setProperty('--button-primary-color', primary.textColor);
      style.setProperty('--button-primary-bg-color', primary.backgroundColor);
      style.setProperty('--button-primary-border-color', primary.borderColor);
      style.setProperty('--button-primary-border-radius', primary.borderRadius);
      style.setProperty('--button-primary-padding', primary.padding);
    }

    /* Flat */
    if (flat) {
      style.setProperty('--button-flat-color', flat.textColor);
      style.setProperty('--button-flat-bg-color', flat.backgroundColor);
      style.setProperty('--button-flat-border-color', flat.borderColor);
      style.setProperty('--button-flat-border-radius', flat.borderRadius);
      style.setProperty('--button-flat-padding', flat.padding);
    }

    /* Secondary */
    if (secondary) {
      style.setProperty('--button-secondary-color', secondary.textColor);
      style.setProperty('--button-secondary-bg-color', secondary.backgroundColor);
      style.setProperty('--button-secondary-border-color', secondary.borderColor);
      style.setProperty('--button-secondary-border-radius', secondary.borderRadius);
      style.setProperty('--button-secondary-padding', secondary.padding);
    }

    /* Badge */
    if (badge) {
      style.setProperty('--button-badge-color', badge.textColor);
      style.setProperty('--button-badge-bg-color', badge.backgroundColor);
      style.setProperty('--button-badge-border-color', badge.borderColor);
      style.setProperty('--button-badge-border-radius', badge.borderRadius);
      style.setProperty('--button-badge-padding', badge.padding);
    }

    /* Icon */
    if (icon) {
      style.setProperty('--button-icon-color', icon.textColor);
      style.setProperty('--button-icon-bg-color', icon.backgroundColor);
      style.setProperty('--button-icon-border-color', icon.borderColor);
      style.setProperty('--button-icon-border-radius', icon.borderRadius);
      style.setProperty('--button-icon-padding', icon.padding);
    }
  }
};

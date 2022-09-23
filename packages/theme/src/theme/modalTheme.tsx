import { ThemeModalProps } from '../models';

interface ISetModalTheme {
  modal: ThemeModalProps;
  style: CSSStyleDeclaration;
}

export const setModalTheme = ({ modal, style }: ISetModalTheme): void => {
  if (modal && style) {
    style.setProperty('--modal-color', modal.color);
    style.setProperty('--modal-bg-color', modal.backgroundColor);
    style.setProperty('--modal-border-color', modal.borderColor);
    style.setProperty('--modal-border-radius', modal.borderRadius);
    style.setProperty('--modal-padding', modal.padding);
    style.setProperty('--modal-shadow', modal.shadow);
    style.setProperty('--modal-transition-speed', modal.transitionSpeed);
    style.setProperty('--modal-overlay-color', modal.overlayColor);
  }
};

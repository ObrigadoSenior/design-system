import { ThemeDropdownProps } from '../models';

interface ISetDropdownTheme {
  dropdown: ThemeDropdownProps;
  style: CSSStyleDeclaration;
}

export const setDropdownTheme = ({ dropdown, style }: ISetDropdownTheme): void => {
  if (dropdown && style) {
    const { content } = dropdown;
    if (content) {
      style.setProperty('--dropdown-border-radius', content.borderRadius);
      style.setProperty('--dropdown-content-height', content.height);
      style.setProperty('--dropdown-content-transition-speed', content.transitionSpeed);
      style.setProperty('--dropdown-content-item-border-radius', content.borderRadius);
      style.setProperty('--dropdown-content-bg-color', content.backgroundColor);

      const { item } = content;
      if (item) {
        style.setProperty('--dropdown-content-item-height', item.height);

        const { neutral, active, disabled } = item;
        if (neutral) {
          style.setProperty('--dropdown-content-item-bg-color', neutral.backgroundColor);
          style.setProperty('--dropdown-content-item-border-color', neutral.borderColor);
          style.setProperty('--dropdown-content-item-text-color', neutral.textColor);
          style.setProperty('--dropdown-content-item-icon-color', neutral.iconColor);
        }
        if (active) {
          style.setProperty('--dropdown-content-item-active-bg-color', active.backgroundColor);
          style.setProperty('--dropdown-content-item-active-border-color', active.borderColor);
          style.setProperty('--dropdown-content-item-active-text-color', active.textColor);
          style.setProperty('--dropdown-content-item-active-icon-color', active.iconColor);
        }
        if (disabled) {
          style.setProperty('--dropdown-content-item-disabled-bg-color', disabled.backgroundColor);
          style.setProperty('--dropdown-content-item-disabled-border-color', disabled.borderColor);
          style.setProperty('--dropdown-content-item-disabled-text-color', disabled.textColor);
          style.setProperty('--dropdown-content-item-disabled-icon-color', disabled.iconColor);
        }
      }
    }
  }
};

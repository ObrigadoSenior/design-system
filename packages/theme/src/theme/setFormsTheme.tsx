import { setStyle } from '.';
import { SetThemeProps, ThemeDropdownContentItemProps, ThemeFormsProps } from '../types';

export const setFormsTheme = ({ data }: SetThemeProps<ThemeFormsProps>): void => {
  const { checkbox, dropdown, input, radio } = data || {};

  if (checkbox) {
    setStyle('--checkbox-bg-color', checkbox.backgroundColor);
    setStyle('--checkbox-border-color', checkbox.borderColor);
    setStyle('--checkbox-border-radius', checkbox.borderRadius);
    setStyle('--checkbox-checkmark-color', checkbox.checkmarkColor);
    setStyle('--checkbox-checkmark-disabled-bg-color', checkbox.disabledBackgroundColor);
    setStyle('--checkbox-checkmark-disabled-border-color', checkbox.disabledBorderColor);
    setStyle('--checkbox-disabled-label-color', checkbox.disabledLabelColor);
    setStyle('--checkbox-hover-color', checkbox.hoverColor);
    setStyle('--checkbox-label-color', checkbox.labelColor);
  }
  if (dropdown) {
    const { content } = dropdown;
    if (content) {
      setStyle('--dropdown-border-radius', content.borderRadius);
      setStyle('--dropdown-content-height', content.height);
      setStyle('--dropdown-content-transition-speed', content.transitionSpeed);
      setStyle('--dropdown-content-item-border-radius', content.borderRadius);
      setStyle('--dropdown-content-bg-color', content.backgroundColor);
      const { item } = content;
      if (item) {
        setStyle('--dropdown-content-item-height', item.height);
        const modifiedItem: Partial<ThemeDropdownContentItemProps> = item;
        delete modifiedItem.height;
        for (const key in modifiedItem) {
          setStyle(`--dropdown-content-item-${key}-bg-color`, modifiedItem[key]['backgroundColor']);
          setStyle(`--dropdown-content-item-${key}-border-color`, modifiedItem[key]['borderColor']);
          setStyle(`--dropdown-content-item-${key}-text-color`, modifiedItem[key]['textColor']);
          setStyle(`--dropdown-content-item-${key}-icon-color`, modifiedItem[key]['iconColor']);
        }
      }
    }
  }
  if (input) {
    setStyle('--input-bg-color', input.backgroundColor);
    setStyle('--input-border-color', input.borderColor);
    setStyle('--input-text-color', input.textColor);
    setStyle('--input-border-radius', input.borderRadius);
    setStyle('--input-no-icon-padding', input.padding.noIcon);
    setStyle('--input-with-icon-padding', input.padding.withIcon);
    setStyle('--input-title-color', input.titleColor);
    setStyle('--input-placeholder-color', input.placeholderColor);
    setStyle('--input-disabled-title-color', input.disabledTitleColor);
    setStyle('--input-disabled-bg-color', input.disabledBackgroundColor);
    setStyle('--input-disabled-border-color', input.disabledBorderColor);
    setStyle('--input-disabled-text-color', input.disabledTextColor);
  }
  if (radio) {
    setStyle('--radio-bg-color', radio.backgroundColor);
    setStyle('--radio-border-color', radio.borderColor);
    setStyle('--radio-border-radius', radio.borderRadius);
    setStyle('--radio-checkmark-color', radio.checkmarkColor);
    setStyle('--radio-checkmark-disabled-bg-color', radio.disabledBackgroundColor);
    setStyle('--radio-checkmark-disabled-border-color', radio.disabledBorderColor);
    setStyle('--radio-disabled-label-color', radio.disabledLabelColor);
    setStyle('--radio-hover-color', radio.hoverColor);
    setStyle('--radio-label-color', radio.labelColor);
  }
};

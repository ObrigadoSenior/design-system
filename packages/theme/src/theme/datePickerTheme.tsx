import { TThemeDatePicker } from '../models';

interface ISetDatePickerTheme {
  datePicker: TThemeDatePicker;
  style: CSSStyleDeclaration;
}

export const setDatePickerTheme = ({ datePicker, style }: ISetDatePickerTheme): void => {
  if (datePicker && style) {
    style.setProperty('--date-picker-border-radius', datePicker.borderRadius);
    style.setProperty('--date-picker-border-color', datePicker.borderColor);
    const { day, week, month } = datePicker;

    if (day) {
      const { borderRadius, gap, activeMonth, active, disabled, selected, selectedRange, monthBreak, width } =
        day || {};
      style.setProperty('--date-picker-day-border-radius', borderRadius);
      style.setProperty('--date-picker-day-width', width);

      style.setProperty('--date-picker-month-grid-gap', gap);

      if (disabled) {
        style.setProperty('--date-picker-day-disabled-border-color', disabled.borderColor);
        style.setProperty('--date-picker-day-disabled-bg-color', disabled.backgroundColor);
        style.setProperty('--date-picker-day-disabled-text-color', disabled.textColor);
      }

      if (active) {
        style.setProperty('--date-picker-day-active-border-color', active.borderColor);
        style.setProperty('--date-picker-day-active-bg-color', active.backgroundColor);
        style.setProperty('--date-picker-day-active-text-color', active.textColor);
      }

      if (activeMonth) {
        style.setProperty('--date-picker-day-active-month-border-color', activeMonth.borderColor);
        style.setProperty('--date-picker-day-active-month-bg-color', activeMonth.backgroundColor);
        style.setProperty('--date-picker-day-active-month-text-color', activeMonth.textColor);
      }

      if (selected) {
        style.setProperty('--date-picker-day-selected-border-color', selected.borderColor);
        style.setProperty('--date-picker-day-selected-bg-color', selected.backgroundColor);
        style.setProperty('--date-picker-day-selected-text-color', selected.textColor);
      }

      if (selectedRange) {
        style.setProperty('--date-picker-day-selected-range-border-color', selectedRange.borderColor);
        style.setProperty('--date-picker-day-selected-range-bg-color', selectedRange.backgroundColor);
        style.setProperty('--date-picker-day-selected-range-text-color', selectedRange.textColor);
      }

      if (monthBreak) {
        style.setProperty('--date-picker-day-month-break-border-color', monthBreak.borderColor);
        style.setProperty('--date-picker-day-month-break-bg-color', monthBreak.backgroundColor);
        style.setProperty('--date-picker-day-month-break-text-color', monthBreak.textColor);
      }
    }
    if (week) {
      const { textColor, textSize, shadow } = week || {};
      style.setProperty('--date-picker-week-text-size', textSize);
      style.setProperty('--date-picker-week-text-color', textColor);
      style.setProperty('--date-picker-week-shadow', shadow);
    }
    if (month) {
      const { button, textColor, textSize, yearSize } = month || {};
      style.setProperty('--date-picker-text-color', textColor);
      style.setProperty('--date-picker-month-text-size', textSize);
      style.setProperty('--date-picker-year-text-size', yearSize);

      if (button) {
        const { borderColor, backgroundColor, disabledBackgroundColor, disabledIconColor, iconColor, iconSize } =
          button || {};
        style.setProperty('--date-picker-change-month-button-border-color', borderColor);
        style.setProperty('--date-picker-change-month-button-bg-color', backgroundColor);
        style.setProperty('--date-picker-change-month-button-icon-color', iconColor);
        style.setProperty('--date-picker-change-month-button-icon-size', iconSize);
        style.setProperty('--date-picker-change-month-button-disabled-icon-color', disabledIconColor);
        style.setProperty('--date-picker-change-month-button-disabled-bg-color', disabledBackgroundColor);
      }
    }
  }
};

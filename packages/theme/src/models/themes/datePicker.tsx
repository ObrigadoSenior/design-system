export type TThemeDefaultDay = {
  textColor: string;
  borderColor: string;
  backgroundColor: string;
};

export type TThemeDatePickerMonth = {
  button: {
    borderColor: string;
    backgroundColor: string;
    disabledBackgroundColor: string;
    disabledIconColor: string;
    iconColor: string;
    iconSize: string;
  };
  textColor: string;
  textSize: string;
  yearSize: string;
};

export type TThemeDatePickerWeek = {
  textColor: string;
  textSize: string;
  shadow: string;
};

export type TThemeDatePickerDay = {
  borderRadius: string;
  gap: string;
  width: string;
  activeMonth: TThemeDefaultDay;
  active: TThemeDefaultDay;
  disabled: TThemeDefaultDay;
  selected: TThemeDefaultDay;
  selectedRange: TThemeDefaultDay;
  monthBreak: TThemeDefaultDay;
};

export type TThemeDatePicker = {
  borderColor: string;
  borderRadius: string;
  month: TThemeDatePickerMonth;
  week: TThemeDatePickerWeek;
  day: TThemeDatePickerDay;
};

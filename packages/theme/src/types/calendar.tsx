type ThemeCalendarDayDefaultProps = {
  bgColor: string;
  color: string;
  borderColor: string;
};

type ThemeCalendarDefaultProps = ThemeCalendarDayDefaultProps & {
  maxWidth: string;
  padding: string;
  gap: string;
  weekdayPadding: string;
  monthPadding: string;
  borderRadius: string;
};

export type ThemeCalendarOtherMonthProps = ThemeCalendarDayDefaultProps;

export type ThemeCalendarDaySearchedStartProps = ThemeCalendarDayDefaultProps;

export type ThemeCalendarDaySearchedEndProps = ThemeCalendarDayDefaultProps;

export type ThemeCalendarDayRangeProps = ThemeCalendarDayDefaultProps;

export type ThemeCalendarDayDisabledProps = ThemeCalendarDayDefaultProps;

export type ThemeCalendarDayProps = {
  default: ThemeCalendarDayDefaultProps & {
    borderRadius: string;
    border: string;
    height: string;
  };
  otherMonth: ThemeCalendarOtherMonthProps;
  searchedStart: ThemeCalendarDaySearchedStartProps;
  searchedEnd: ThemeCalendarDaySearchedEndProps;
  range: ThemeCalendarDayRangeProps;
  disabled: ThemeCalendarDayDisabledProps;
};

export type ThemeCalendarProps = ThemeCalendarDefaultProps & {
  day: ThemeCalendarDayProps;
};

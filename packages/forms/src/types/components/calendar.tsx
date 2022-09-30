import { Dayjs } from 'dayjs';

export type date = Dayjs;

export interface CalendarDayProps extends Pick<CalendarProps, 'onClickCalendarDay'> {
  day: date;
  index: number;
  firstNonDisabledDay?: date;
  searchedStart?: boolean;
  searchedEnd?: boolean;
  range?: boolean;
  disabled?: boolean;
  otherMonth?: boolean;
}

export interface CalendarDaysProps extends Pick<CalendarProps, 'onClickCalendarDay' | 'dates'> {
  startOfMonth: Dayjs;
  sunday: Dayjs;
}

export interface CalendarMonthPickerProps
  extends Pick<CalendarProps, 'onClickPrevCalendarButton' | 'onClickNextCalendarButton'> {
  date: date;
}

export type CalendarWeekdaysProps = {
  sunday: date;
};

export interface CalendarProps {
  onClickCalendarDay: (date: date) => void;
  onClickPrevCalendarButton: (date: date) => void;
  onClickNextCalendarButton: (date: date) => void;
  dates: {
    start?: date;
    end?: date;
    month?: date;
  };
}

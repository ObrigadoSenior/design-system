import { Dayjs } from 'dayjs';

export type date = Dayjs;

type DatesProps = {
  start?: date;
  end?: date;
  month: date;
};
export interface CalendarDayProps extends Pick<CalendarProps, 'onClickCalendarDay'> {
  day: date;
  index: number;
  today?: boolean;
  searchedStart?: boolean;
  searchedEnd?: boolean;
  range?: boolean;
  disabled?: boolean;
  otherMonth?: boolean;
}

export type CalendarDaysProps = Pick<CalendarProps, 'onClickCalendarDay' | 'dates'>;

export interface CalendarMonthPickerProps
  extends Pick<CalendarProps, 'onClickPrevCalendarButton' | 'onClickNextCalendarButton'> {
  date: date;
}

export type CalendarWeekdaysProps = Pick<DatesProps, 'month'>;

export interface CalendarProps {
  onClickCalendarDay: (date: date) => void;
  onClickPrevCalendarButton: (date: date) => void;
  onClickNextCalendarButton: (date: date) => void;
  dates: DatesProps;
}

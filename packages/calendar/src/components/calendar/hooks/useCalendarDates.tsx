import { useState } from 'react';
import { CalendarProps, date } from '../../../types';
import { dateIsSame } from '../utils/dates';

type UseDatesProps = Pick<CalendarProps, 'dates'>;

export const useCalendarDates = ({ dates: initDates }: UseDatesProps): CalendarProps => {
  const [dates, setDates] = useState<UseDatesProps['dates']>(initDates);

  const onClickCalendarDay = (d: date) => {
    const { start, end } = dates;
    if (start === undefined || dateIsSame(d, end, 'day') || (end === undefined && d.isBefore(start))) {
      setDates({ ...dates, start: d });
    } else if ((end === undefined && d.isAfter(start)) || dateIsSame(d, start, 'day')) {
      setDates({ ...dates, end: d });
    } else if (dateIsSame(start, end, 'day')) {
      if (d.isBefore(start)) {
        setDates({ ...dates, start: d });
      } else if (d.isAfter(end)) {
        setDates({ ...dates, end: d });
      }
    } else if (start && end) {
      setDates({ ...dates, start: d, end: undefined });
    }
  };

  const onClickNextCalendarButton = (d: date) => setDates({ ...dates, month: d });
  const onClickPrevCalendarButton = (d: date) => setDates({ ...dates, month: d });

  return { dates, onClickCalendarDay, onClickNextCalendarButton, onClickPrevCalendarButton };
};

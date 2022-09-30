import dayjs from 'dayjs';

import React from 'react';

import { CalendarDaysProps } from '../../../types/components/calendar';
import { Day } from '../day';
import {
  dateAdd,
  dateIsBefore,
  dateIsBetween,
  dateIsSame,
  daysFromSunday,
  daysInMonth,
  daysInNextMonthFirstWeek,
} from '../utils/dates';
import { mapDates } from '../utils/mapDates';

export const Days = ({ onClickCalendarDay, dates }: CalendarDaysProps): JSX.Element => {
  const { start, end, month } = dates;

  const numberOfDays = daysInMonth(month) + daysFromSunday(month) + daysInNextMonthFirstWeek(month);

  const days = mapDates({ amount: numberOfDays, month }).map(({ d, i }) => {
    const day = dateAdd(d, i, 'day');

    const range = !!start && !!end && dateIsBetween(day, start, end);
    const disabled = dateIsBefore(dateAdd(day, 1, 'day'), dayjs());
    const otherMonth = !dateIsSame(day, month, 'month');

    return (
      <Day
        key={day?.toString()}
        index={i}
        day={day}
        searchedStart={start ? dateIsSame(day, start, 'day') : false}
        searchedEnd={end ? dateIsSame(day, end, 'day') : false}
        range={range}
        onClickCalendarDay={onClickCalendarDay}
        disabled={disabled}
        otherMonth={otherMonth}
        today={dateIsSame(day, dayjs(), 'day')}
      />
    );
  });
  return <>{days}</>;
};

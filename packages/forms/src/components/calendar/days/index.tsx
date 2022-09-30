import dayjs, { Dayjs } from 'dayjs';
import isBetween from 'dayjs/plugin/isBetween';

import React from 'react';

import { CalendarDaysProps } from '../../../types/components/calendar';
import { Day } from '../day';
import { dateAdd, dateIsBefore, dateIsBetween, dateIsSame } from '../utils/dates';

dayjs.extend(isBetween);

export const Days = ({ onClickCalendarDay, startOfMonth, sunday, dates }: CalendarDaysProps): JSX.Element => {
  const { start, end, month } = dates;
  const endOfMonth = dayjs(month).endOf('month');
  const daysFromSunday = startOfMonth.diff(sunday, 'day');
  const daysInNextMonthFirstWeek = Math.abs(endOfMonth.diff(endOfMonth.weekday(6), 'day'));

  const monthDays = startOfMonth.daysInMonth();
  const numberOfDays = monthDays + daysFromSunday + daysInNextMonthFirstWeek;

  let firstNonDisabledDay: Dayjs;

  const days = new Array(numberOfDays).fill(sunday).map((dayInMonth, index) => {
    const day = dayjs(dayInMonth.add(index, 'day'));

    const range = !!start && !!end && dateIsBetween(day, start, end);
    const disabled = dateIsBefore(dateAdd(day, 1, 'day'), dayjs());

    const otherMonth = !dateIsSame(day, month, 'month');

    if (firstNonDisabledDay === undefined && !disabled && !otherMonth) {
      firstNonDisabledDay = day;
    }

    return (
      <Day
        key={day?.toString()}
        index={index}
        day={day}
        searchedStart={dateIsSame(day, start, 'day')}
        searchedEnd={dateIsSame(day, end, 'day')}
        range={range}
        onClickCalendarDay={onClickCalendarDay}
        disabled={disabled}
        otherMonth={otherMonth}
        firstNonDisabledDay={firstNonDisabledDay}
      />
    );
  });

  return <>{days}</>;
};

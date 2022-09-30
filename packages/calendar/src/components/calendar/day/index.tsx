import { Text } from '@obrigadosenior/core';
import cn from 'classnames';
import React from 'react';
import { CalendarDayProps } from '../../../types/components/calendar';
import { dateFormat } from '../utils/dates';
import styles from './Day.module.scss';

export const Day = ({
  day,
  onClickCalendarDay,
  index,
  searchedStart,
  searchedEnd,
  range,
  disabled,
  otherMonth,
  today,
}: CalendarDayProps): JSX.Element => {
  const formattedDay = dateFormat(day, 'YY-MM-DD');

  return (
    <li
      className={cn(styles.day, {
        [styles.searchedStart]: searchedStart,
        [styles.searchedEnd]: searchedEnd,
        [styles.disabled]: disabled,
        [styles.range]: !searchedStart && !searchedEnd && range,
        [styles.otherMonth]: otherMonth && !searchedStart && !searchedEnd && !range && !disabled,
      })}
      data-testid={`calendar-day-${index}`}
    >
      <input
        id={formattedDay}
        value={day.toString()}
        type="checkbox"
        onChange={() => onClickCalendarDay(day)}
        checked={searchedStart || searchedEnd}
        disabled={disabled}
        name={formattedDay}
        tabIndex={today ? 0 : -1}
      />
      <label htmlFor={formattedDay}>
        <Text>{day.format('D')}</Text>
      </label>
    </li>
  );
};

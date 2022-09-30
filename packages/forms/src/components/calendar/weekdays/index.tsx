import { Text } from '@obrigadosenior/core';
import React from 'react';
import { CalendarWeekdaysProps } from '../../../types/components/calendar';
import styles from '../Calendar.module.scss';
import { dateAdd } from '../utils/dates';
import { mapDates } from '../utils/mapDates';

export const Weekdays = ({ month }: CalendarWeekdaysProps): JSX.Element => {
  const weekdays = mapDates({ amount: 7, month }).map(({ d, i }) => {
    const weekday = dateAdd(d, i, 'd').format('ddd');
    const weekDayTestId = `weekday${i}`;
    return (
      <li data-testid={weekDayTestId} key={weekday} className={styles.weekday}>
        <Text>{weekday}</Text>
      </li>
    );
  });

  return <>{weekdays}</>;
};

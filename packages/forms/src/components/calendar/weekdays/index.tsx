import { Text } from '@obrigadosenior/core';
import React from 'react';
import { CalendarWeekdaysProps } from '../../../types/components/calendar';
import styles from '../Calendar.module.scss';
import { dateAdd } from '../utils/dates';

const weekdays = (sunday: CalendarWeekdaysProps['sunday']) =>
  new Array(7).fill(sunday).map((day, idx) => {
    const weekday = dateAdd(day, idx, 'd').format('ddd');
    const weekDayTestId = `weekday${idx}`;
    return (
      <li data-testid={weekDayTestId} key={weekday} className={styles.weekday}>
        <Text>{weekday}</Text>
      </li>
    );
  });

export const Weekdays = ({ sunday }: CalendarWeekdaysProps): JSX.Element => {
  return <>{weekdays(sunday)}</>;
};

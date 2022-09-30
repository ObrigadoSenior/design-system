import { Text } from '@obrigadosenior/core';
import React from 'react';
import { CalendarWeekdaysProps } from '../../../types/components/calendar';
import styles from '../Calendar.module.scss';
import { useWindowSize } from '../hooks/useWindowSize';
import { dateAdd } from '../utils/dates';
import { mapDates } from '../utils/mapDates';

export const Weekdays = ({ month }: CalendarWeekdaysProps): JSX.Element => {
  const weekdays = mapDates({ amount: 7, month }).map(({ d, i }) => {
    const windowSize = useWindowSize();
    const weekday = dateAdd(d, i, 'd').format(windowSize === 's' ? 'dd' : 'ddd');
    const weekDayTestId = `weekday${i}`;
    return (
      <li data-testid={weekDayTestId} key={weekday} className={styles.weekday}>
        <Text>{weekday}</Text>
      </li>
    );
  });

  return <>{weekdays}</>;
};

import React from 'react';
import { CalendarProps } from '../../types/components/calendar';
import styles from './Calendar.module.scss';
import { Days } from './days';
import { useCalendarHandleFocus } from './hooks/useCalendarHandleFocus';
import { MonthPicker } from './monthPicker';
import { Weekdays } from './weekdays';

export const Calendar = ({
  onClickCalendarDay,
  onClickPrevCalendarButton,
  onClickNextCalendarButton,
  dates,
}: CalendarProps): JSX.Element => {
  const { ulRef } = useCalendarHandleFocus({ onClickNextCalendarButton, onClickPrevCalendarButton });
  const { month } = dates;

  return (
    <div className={styles.month}>
      <MonthPicker
        date={month}
        onClickPrevCalendarButton={onClickPrevCalendarButton}
        onClickNextCalendarButton={onClickNextCalendarButton}
      />
      <ul className={styles.calendar} ref={ulRef}>
        <Weekdays month={month} />
        <Days onClickCalendarDay={onClickCalendarDay} dates={dates} />
      </ul>
    </div>
  );
};

import React from 'react';
import dayjs from 'dayjs';
import weekday from 'dayjs/plugin/weekday';
import { Days } from './days';
import { MonthPicker } from './monthPicker';
import { Weekdays } from './weekdays';
import styles from './Calendar.module.scss';
import { CalendarProps } from '../../types/components/calendar';
import { useHandleFocus } from './hooks/useHandleFocus';

dayjs.extend(weekday);

export const Calendar = ({
  onClickCalendarDay,
  onClickPrevCalendarButton,
  onClickNextCalendarButton,
  dates,
}: CalendarProps): JSX.Element => {
  const { ulRef } = useHandleFocus({ onClickNextCalendarButton, onClickPrevCalendarButton });
  const { month = dayjs() } = dates;

  const startOfMonth = month.startOf('month');
  const sunday = startOfMonth.weekday(0);

  return (
    <div className={styles.month}>
      <MonthPicker
        date={month}
        onClickPrevCalendarButton={onClickPrevCalendarButton}
        onClickNextCalendarButton={onClickNextCalendarButton}
      />
      <ul className={styles.calendar} ref={ulRef}>
        <Weekdays sunday={sunday} />
        <Days onClickCalendarDay={onClickCalendarDay} startOfMonth={startOfMonth} sunday={sunday} dates={dates} />
      </ul>
    </div>
  );
};

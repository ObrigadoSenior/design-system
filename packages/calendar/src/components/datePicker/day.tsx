import React from 'react';
import { datesAreOnSameDay, IDayInMonth, isDateBetweenTwoDates } from '../../hooks/datePicker/useDaysFromDate';
import { TDatePickerThemeCategory, TDates } from '../../models';
import './datePickerStyle.css';

export interface IOnSetSelectedDate {
  date: Date;
  selectedDates: TDates;
}

export interface IDay extends IDayInMonth {
  selectedDates: TDates;
  onSetSelectedDate: ({ date, selectedDates }: IOnSetSelectedDate) => void;
  activeYear: number;
  activeMonthNr: number;
  monthIdentifier?: boolean;
  singleDate?: boolean;
  lastInMonth: boolean;
}

export const Day = ({
  monthNr,
  today,
  day,
  year,
  month,
  monthBreak,
  date,
  empty,
  selectedDates,
  onSetSelectedDate,
  activeMonthNr,
  activeYear,
  monthIdentifier,
  singleDate,
  lastInMonth,
}: IDay): JSX.Element => {
  const id = monthIdentifier ? `month-identifier-${monthNr}-${year}` : '';

  if (empty) {
    return React.createElement(monthIdentifier ? 'button' : 'li', {
      className: `date-picker-day ${monthIdentifier ? 'month-identifier' : ''}`,
      datavalue: 'empty',
      id,
    });
  }

  let choosenDates = selectedDates;
  if (singleDate) {
    choosenDates = [date, date];
    selectedDates = [selectedDates[0], selectedDates[0]];
  }

  const selectedOutDate = selectedDates.length > 0 ? selectedDates[0] : null;
  const selectedHomeDate = selectedDates.length > 0 ? selectedDates[1] : null;

  const activeMonth = activeMonthNr === monthNr && activeYear === year;
  const selectedOut = selectedOutDate ? datesAreOnSameDay(date, selectedOutDate) : false;
  const selectedHome = selectedHomeDate ? datesAreOnSameDay(date, selectedHomeDate) : false;
  const disabled = date < new Date();
  const isInRange =
    selectedOutDate &&
    selectedHomeDate &&
    isDateBetweenTwoDates({
      fromDate: selectedOutDate,
      toDate: selectedHomeDate,
      givenDate: date,
    });

  let themeCategory: TDatePickerThemeCategory = 'active';
  if (activeMonth) themeCategory = 'activeMonth';
  if (isInRange) themeCategory = 'selectedRange';
  if (selectedOut || selectedHome) themeCategory = 'selected';
  if (disabled && !today) themeCategory = 'disabled';

  const onBlur = () => {
    const el = document.getElementById('m-btn-next');
    el?.focus();
  };

  return (
    <li className={`date-picker-day ${monthIdentifier ? 'month-identifier' : ''}`} data-value={themeCategory}>
      <button
        data-testid={`datepicker-day-${themeCategory}`}
        id={id}
        onBlur={() => lastInMonth && onBlur()}
        className="date-picker-day-button"
        data-value={themeCategory}
        disabled={disabled && !today}
        onClick={() => onSetSelectedDate({ date, selectedDates: choosenDates })}
      >
        {day}
        {monthBreak && <span className="date-picker-day-month-break break">{month}</span>}
      </button>
    </li>
  );
};

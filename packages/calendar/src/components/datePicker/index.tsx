import React, { useEffect, useRef } from 'react';
import { IDayInMonth, useDaysFromDate } from '../../hooks/datePicker/useDaysFromDate';
import { useSelectedDates } from '../../hooks/datePicker/useSelectedDates';
import { useYearMonth } from '../../hooks/datePicker/useYearMonth';
import { Day, IOnSetSelectedDate } from './day';
import { IDatePicker, IScrollToRef } from '../../models';
import './datePickerStyle.css';

export const DatePicker: React.FC<IDatePicker> = ({
  className = '',
  dates,
  onChange,
  locale,
  nrOfDays = 365,
  icons,
  singleDate,
  basic = false,
}) => {
  const date = new Date();
  const gridRef = useRef<HTMLDivElement>(null);

  const { days, months, onGetDays } = useDaysFromDate({
    date,
    nrOfDays,
    locale,
  });

  const { selectedDate, selectedDates, onSetSelectedDate } = useSelectedDates({
    defaultDates: dates,
  });
  const { activeYear, activeMonth, onSetYearAndMonthNr, ...restYearMonth } = useYearMonth({
    locale,
    date: (dates && dates[0]) || date,
  });

  const monthsLength = months.length;
  useEffect(() => {
    onGetDays();
    if (!basic) {
      setTimeout(() => {
        scrollToRef({
          dir: 'next',
          month: restYearMonth.activeMonthNr,
          year: activeYear,
        });
      }, 0);
    }
  }, []);

  useEffect(() => {
    onChange(singleDate ? selectedDate : selectedDates);
  }, [selectedDates]);

  const getActiveIndex = () => {
    const { scrollLeft = 0, clientWidth = 0 } = gridRef?.current || {};
    const scrollIndex = scrollLeft / clientWidth;
    const index = Number(scrollIndex.toFixed(0));

    if (monthsLength > 0 && index >= 0 && index <= monthsLength) {
      const activeM = months[index];
      if (activeM && activeM.length) {
        const { year, monthNr } = activeM[0];
        onSetYearAndMonthNr({ year, month: monthNr });
        if (index <= 1 || index >= monthsLength - 2) {
          disableButtons(index);
        }
      }
    }
  };

  const disableButtons = (index: number) => {
    const buttonEls = document.querySelectorAll('.date-picker-change-month-button');
    if (buttonEls && buttonEls.length > 1) {
      const prev = buttonEls[0];
      const next = buttonEls[1];

      if (index < 1) {
        prev.setAttribute('disabled', 'true');
      } else if (prev.getAttribute('disabled')) {
        prev.removeAttribute('disabled');
      }

      if (index >= monthsLength - 1) {
        next.setAttribute('disabled', 'true');
      } else if (next.getAttribute('disabled')) {
        next.removeAttribute('disabled');
      }
    }
  };

  const weekdays = days.slice(0, 7);
  const renderWeekdays = weekdays.map(({ weekday }) => <span key={weekday}>{weekday}</span>);

  const renderDays = (m: IDayInMonth[]) =>
    m?.map((props, i) => (
      <Day
        lastInMonth={i >= m.length - 1}
        monthIdentifier={i === 0}
        onSetSelectedDate={({ date: d, selectedDates: sd }: IOnSetSelectedDate) => onSetSelectedDate(d, sd)}
        selectedDates={selectedDates}
        activeYear={activeYear}
        key={props.date?.toString() || i}
        singleDate={singleDate}
        {...props}
        {...restYearMonth}
      />
    ));

  const renderMonthsView = months?.map((m, index) => {
    const { monthFull, year } = (m && m.length && m[0]) || {};
    return (
      <li data-testid="datepicker-month-li" className="date-picker-grid-li" key={index}>
        {!basic && <div className="date-picker-week">{renderWeekdays}</div>}
        {basic && (
          <div className="date-picker-month-and-year">
            <span>{`${monthFull} ${year}`}</span>
          </div>
        )}
        <ul className="date-picker-grid-month">{renderDays(m)}</ul>
      </li>
    );
  });

  const scrollToRef = ({ dir, month, year }: IScrollToRef) => {
    const i = month || restYearMonth.activeMonthNr;
    let toRefMonth = dir === 'prev' ? i - 1 : i + 1;
    let toRefYear = year || activeYear;
    if (toRefMonth > 11) {
      toRefMonth = 0;
      toRefYear += 1;
    } else if (toRefMonth < 0) {
      toRefYear -= 1;
      toRefMonth = 11;
    }
    setTimeout(() => {
      const el = document?.getElementById(`month-identifier-${toRefMonth}-${toRefYear}`);
      if (el && typeof el.scrollIntoView === 'function') {
        el?.scrollIntoView({ behavior: 'smooth', inline: 'start', block: 'nearest' });
      }
    }, 0);
  };

  const onButtonTabDown = () => {
    const el = document.getElementById(`month-identifier-${restYearMonth.activeMonthNr}-${activeYear}`);
    el?.focus();
  };

  const changeMonth = (dir: 'next' | 'prev') => {
    return (
      <button
        data-testid={`datepicker-change-month-${dir}`}
        className={`date-picker-change-month-button ${dir}`}
        id={`m-btn-${dir}`}
        onKeyDown={({ key }) => key === 'Tab' && onButtonTabDown()}
        onClick={() => scrollToRef({ dir })}
      >
        {icons && icons.changeMonth[dir]}
      </button>
    );
  };

  return (
    <div className={`date-picker-wrapper ${basic ? 'basic' : ''} ${className}`}>
      {!basic && (
        <div className="date-picker-month">
          {changeMonth('prev')}
          <div>
            <span className="date-picker-month-text">{activeMonth}</span>
            <span className="date-picker-year-text">{activeYear}</span>
          </div>
          {changeMonth('next')}
        </div>
      )}
      {basic && <div className="date-picker-week">{renderWeekdays}</div>}
      <div className="date-picker-grid-wrapper " ref={gridRef} onScroll={() => !basic && getActiveIndex()}>
        <ul data-testid="datepicker-month-ul" className="date-picker-grid-ul">
          {months && renderMonthsView}
        </ul>
      </div>
    </div>
  );
};

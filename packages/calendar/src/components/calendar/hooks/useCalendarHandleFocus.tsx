import dayjs from 'dayjs';
import { RefObject, useEffect, useRef } from 'react';
import { CalendarProps } from '../../../types';
import { dateAdd, dateFormat, dateIsBefore, dateIsSame, dateSubtract } from '../utils/dates';

type UseHandleFocusProps = Pick<CalendarProps, 'onClickNextCalendarButton' | 'onClickPrevCalendarButton'>;

export const useCalendarHandleFocus = ({
  onClickNextCalendarButton,
  onClickPrevCalendarButton,
}: UseHandleFocusProps): { ulRef: RefObject<HTMLUListElement> } => {
  const ulRef = useRef<HTMLUListElement>(null);

  const handleFocusInsideCalendar = ({ target, key }: any) => {
    const { value } = target;
    let date = dayjs(value);

    switch (key) {
      case 'ArrowRight':
        date = dateAdd(date, 1, 'd');
        break;
      case 'ArrowLeft':
        date = dateSubtract(date, 1, 'd');
        break;
      case 'ArrowUp':
        date = dateSubtract(date, 7, 'd');
        break;
      case 'ArrowDown':
        date = dateAdd(date, 7, 'd');
        break;
      default:
        date;
        break;
    }

    const formattedDate = dateFormat(date, 'YY-MM-DD');
    const sameMonth = dateIsSame(date, value, 'month');

    if (!sameMonth) {
      const before = dateIsBefore(date, value);
      if (before) {
        onClickPrevCalendarButton(dateSubtract(date, 1, 'm'));
      } else if (!before) {
        onClickNextCalendarButton(dateAdd(date, 1, 'm'));
      }
    }

    document.getElementById(formattedDate)?.focus();
  };

  useEffect(() => {
    ulRef.current?.addEventListener('keydown', handleFocusInsideCalendar);
    return () => {
      ulRef.current?.addEventListener('keydown', handleFocusInsideCalendar);
    };
  }, []);

  return { ulRef };
};

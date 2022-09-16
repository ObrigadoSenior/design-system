import { useCallback, useState } from 'react';
import { IOnSetYearAndMonthNr } from '../../models/components/datePickerModels';
import { dateToIntlLocale } from './useDaysFromDate';

export interface IUseYearMonth {
  date: Date;
  locale: string;
}

export const useYearMonth = ({
  date,
  locale,
}: IUseYearMonth): {
  activeDate: Date;
  activeMonthNr: number;
  activeYear: number;
  activeMonth: string;
  onSetYearAndMonthNr: ({ year, month }: IOnSetYearAndMonthNr) => void;
} => {
  const [activeDate, setActiveDate] = useState<Date>(date);

  const onSetYearAndMonthNr = useCallback(({ year, month }: IOnSetYearAndMonthNr) => {
    const newDate = new Date(activeDate.getFullYear(), activeDate.getMonth(), 1);
    newDate.setFullYear(year);
    newDate.setMonth(month);
    setActiveDate(newDate);
  }, []);

  return {
    activeDate,
    activeMonthNr: activeDate.getMonth(),
    activeYear: activeDate.getFullYear(),
    activeMonth: dateToIntlLocale({
      locale,
      date: activeDate,
      options: { month: 'long' },
    }),
    onSetYearAndMonthNr,
  };
};

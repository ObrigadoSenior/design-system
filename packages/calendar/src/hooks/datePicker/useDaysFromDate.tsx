import { useCallback, useState } from 'react';

export interface IDayInMonth {
  date: Date;
  today: boolean;
  monthNr: number;
  monthFull: string;
  month: string;
  monthBreak: boolean;
  weekday: string;
  weekdayNr: number;
  day: number;
  year: number;
  empty?: boolean;
}

export interface IDaysFromDate {
  date: Date;
  nrOfDays: number;
  locale: string;
}

export interface IDateToIntlLocale {
  date: Date;
  locale: string;
  options?: {
    weekday?: 'short' | 'long';
    year?: 'numeric';
    month?: 'short' | 'long';
    day?: 'numeric';
  };
}

export interface IIsDateBetweenTwoDates {
  fromDate: Date;
  toDate: Date;
  givenDate: Date;
}

export const isDateBetweenTwoDates = ({ fromDate, toDate, givenDate }: IIsDateBetweenTwoDates): boolean =>
  givenDate <= toDate && givenDate >= fromDate && givenDate !== toDate && givenDate !== fromDate;

export const dateToIntlLocale = ({ date, options, locale = 'en-GB' }: IDateToIntlLocale): string => {
  const validLocale = locale.match('^[a-z][a-z][-][A-Z][A-Z]$') ? locale : 'en-GB';
  return new Intl.DateTimeFormat(validLocale, { ...options }).format(date);
};

export const datesAreOnSameDay = (first: Date, second: Date): boolean =>
  first.getFullYear() === second.getFullYear() &&
  first.getMonth() === second.getMonth() &&
  first.getDate() === second.getDate();

const daysFromDate = ({ date, nrOfDays, locale }: IDaysFromDate) => {
  const firstDay = new Date(date.getFullYear(), date.getMonth());

  const first = firstDay.getDate() - firstDay.getDay();

  const days: IDayInMonth[] = [];
  for (let i = 0; i < nrOfDays; i += 1) {
    const nextDay = new Date(firstDay.getTime());

    nextDay.setDate(first + i);

    const monthNr = new Date(nextDay).getMonth();
    let monthBreak = false;
    if (days && days.length > i - 1) {
      monthBreak = i === 0 || days[i - 1]?.monthNr !== monthNr;
    }

    const dayInMonth: IDayInMonth = {
      date: nextDay,
      weekday: dateToIntlLocale({ locale, date: new Date(nextDay), options: { weekday: 'short' } }),
      weekdayNr: Number(new Date(nextDay).getDay()),
      today: datesAreOnSameDay(new Date(), nextDay),
      day: Number(dateToIntlLocale({ locale, date: new Date(nextDay), options: { day: 'numeric' } })),
      monthFull: dateToIntlLocale({ locale, date: new Date(nextDay), options: { month: 'long' } }),
      monthNr,
      month: dateToIntlLocale({ locale, date: new Date(nextDay), options: { month: 'short' } }),
      monthBreak,
      year: Number(dateToIntlLocale({ locale, date: new Date(nextDay), options: { year: 'numeric' } })),
    };
    days.push(dayInMonth);
  }
  return days;
};

const groupBy = (arr: IDayInMonth[], property: string, additionalProperty: string) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return arr.reduce((memo: any, x: IDayInMonth) => {
    const prop = `${x[property]}-${x[additionalProperty]}`;
    if (!memo[prop]) {
      memo[prop] = [];
      if (x.weekdayNr !== 0) {
        memo[prop] = [...new Array(x.weekdayNr)].map(() => ({
          empty: true,
          year: x.year,
          monthNr: x.monthNr,
          monthFull: x.monthFull,
        }));
      }
    }
    memo[prop].push(x);
    return memo;
  }, {});
};

const getTime = (date?: Date) => {
  return date != null ? date.getTime() : 0;
};

const sortByDueDate = (arr: IDayInMonth[]) =>
  arr.sort((a: IDayInMonth, b: IDayInMonth) => getTime(a.date) - getTime(b.date));

export const useDaysFromDate = ({
  ...rest
}: IDaysFromDate): { days: IDayInMonth[]; months: IDayInMonth[][]; onGetDays: () => void } => {
  const [days, setDays] = useState<IDayInMonth[]>([]);
  const [months, setMonths] = useState<IDayInMonth[][]>([]);

  const onGetDays = useCallback(() => {
    const d = daysFromDate({ ...rest });
    const m: IDayInMonth[][] = Object.values(groupBy(sortByDueDate(d), 'monthNr', 'year'));
    setDays(d);
    setMonths(m);
  }, []);

  return { days, months, onGetDays };
};

import { ReactElement } from 'react';

export type TDatePickerThemeCategory =
  | 'active'
  | 'activeMonth'
  | 'disabled'
  | 'selected'
  | 'selectedRange'
  | 'monthBreak';

export type ISelectedDates = {
  outDate: Date;
  homeDate: Date;
};

export type TDate = Date | null;
export type TDates = [TDate, TDate];

export type IDatePicker = {
  onChange: (dates: TDates | TDate) => void;

  locale: string;
  icons: {
    changeMonth: {
      prev: ReactElement | JSX.Element;
      next: ReactElement | JSX.Element;
    };
  };
  nrOfDays?: number;
  dates?: TDates;
  className?: string;
  singleDate?: boolean;
  basic?: boolean;
};

export type IUseSelectedDates = {
  defaultDates: IDatePicker['dates'];
};
export type IOnSetYearAndMonthNr = {
  year: number;
  month: number;
};

export type IScrollToRef = {
  dir: 'next' | 'prev';
  month?: number;
  year?: number;
};

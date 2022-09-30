/* eslint-disable no-return-assign */
import { render, waitFor } from '@testing-library/react';
import dayjs, { Dayjs } from 'dayjs';
import React from 'react';
import { Calendar as TestComponent } from '.';
import { OverrideWithOptional } from '../../../../../utils';

import { CalendarProps as TestComponentProps } from '../../types/components/calendar';

type DefaultProps = Pick<
  TestComponentProps,
  'dates' | 'onClickCalendarDay' | 'onClickNextCalendarButton' | 'onClickPrevCalendarButton'
>;

let start = dayjs(new Date());
const end = dayjs(new Date());
let month = dayjs(new Date());

const defaultProps: DefaultProps = {
  dates: {
    start,
    end,
    month,
  },
  onClickCalendarDay: (date: Dayjs) => (start = date),
  onClickPrevCalendarButton: (date: Dayjs) => (month = date),
  onClickNextCalendarButton: (date: Dayjs) => (month = date),
};

const Test = (props: OverrideWithOptional<TestComponentProps, DefaultProps>) => (
  <TestComponent {...defaultProps} {...props} />
);

describe('Departure calendar month ', () => {
  describe('Month', () => {
    it('should render month', async () => {
      const { getByTestId } = render(<Test />);
      expect(await waitFor(() => getByTestId('calendar-month'))).toBeDefined();
    });

    it('should render days in month', async () => {
      const { getByTestId } = render(<Test />);
      const daysInMonth = await waitFor(() => getByTestId('calendar-month')?.querySelectorAll('li'));
      // 31 days in this month, 11 additional days from prev and next month === 44
      expect(daysInMonth).toHaveLength(42);
    });
  });

  describe('Day', () => {
    it('should check searched date', async () => {
      const { getByTestId } = render(<Test />);
      expect(await waitFor(() => getByTestId('calendar-day-26').querySelector('input'))).toBeChecked();
    });

    it('should disable past dates', async () => {
      jest.useFakeTimers('modern').setSystemTime(new Date('2050-10-26').getTime());
      const { getByTestId } = render(<Test />);
      expect(await waitFor(() => getByTestId('calendar-day-19').classList)).toContain('disabled');
    });
  });

  describe('Buttons', () => {
    it('should render calendar forward button', async () => {
      const { getByTestId } = render(<Test />);
      expect(await waitFor(() => getByTestId('month-picker-next'))).toBeDefined();
    });

    it('should render calendar backward button', async () => {
      const { getByTestId } = render(<Test />);
      expect(await waitFor(() => getByTestId('month-picker-prev'))).toBeDefined();
    });
  });
});

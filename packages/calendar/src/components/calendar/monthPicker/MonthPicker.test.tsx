import { fireEvent, render, waitFor } from '@testing-library/react';
import dayjs, { Dayjs } from 'dayjs';
import React from 'react';
import { MonthPicker as TestComponent } from '.';

import { CalendarMonthPickerProps } from '../../../types/components/calendar';

let date = dayjs();

const defaultProps: CalendarMonthPickerProps = {
  date,
  onClickPrevCalendarButton: (d: Dayjs) => (date = d),
  onClickNextCalendarButton: (d: Dayjs) => (date = d),
};

const Test = (props: Partial<CalendarMonthPickerProps>) => <TestComponent {...defaultProps} {...props} />;

describe('Departure calendar month picker', () => {
  describe('Label', () => {
    it('should render month label', async () => {
      const { getByTestId } = render(<Test />);
      expect(await waitFor(() => getByTestId('month-picker-label'))).toBeDefined();
    });

    it('should show correct month', async () => {
      const { getByTestId } = render(<Test date={date} />);
      const monthName = dayjs(date).format('YYYY MMMM');

      expect(await waitFor(() => getByTestId('month-picker-label').textContent)).toContain(monthName);
    });

    it('should show correct year', async () => {
      const { getByTestId } = render(<Test />);
      expect(await waitFor(() => getByTestId('month-picker-label').textContent)).toContain(
        dayjs(date).get('year')?.toString(),
      );
    });

    it('should change displayed month', async () => {
      const { getByTestId, rerender } = render(<Test />);
      fireEvent.click(await waitFor(() => getByTestId('month-picker-next')));
      rerender(<Test date={dayjs(date)} />);
      const monthName = dayjs(date).format('YYYY MMMM');

      expect(getByTestId('month-picker-label').textContent).toContain(monthName);
    });
  });

  describe('Buttons', () => {
    it('should render next month button', async () => {
      const { getByTestId } = render(<Test />);
      expect(await waitFor(() => getByTestId('month-picker-next'))).toBeDefined();
    });

    it('should render prev month button', async () => {
      const { getByTestId } = render(<Test />);
      expect(await waitFor(() => getByTestId('month-picker-prev'))).toBeDefined();
    });

    it('should disable prev button if selected month is +1 from today', async () => {
      const { getByTestId } = render(<Test date={dayjs()} />);
      expect(await waitFor(() => getByTestId('month-picker-prev').getAttribute('disabled'))).toBe('');
    });

    it('should change month on click', async () => {
      const datePreClick = date;
      const { getByTestId } = render(<Test date={datePreClick} />);
      fireEvent.click(await waitFor(() => getByTestId('month-picker-next')));
      const datePostClick = date;

      expect(datePreClick).not.toEqual(datePostClick);
    });
  });
});

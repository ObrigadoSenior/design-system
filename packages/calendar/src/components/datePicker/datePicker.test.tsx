import { arrowLeft, arrowRight } from '@obrigadosenior/icons';
import { cleanup, fireEvent, render, waitFor } from '@testing-library/react';
import React from 'react';
import { DatePicker as TestComponent } from '.';
import { IDatePicker as TestComponentProps, TDate, TDates } from '../../models';
import { OverrideWithOptional } from '../../../../../utils';

type DefaultProps = Pick<
  TestComponentProps,
  'basic' | 'dates' | 'icons' | 'locale' | 'nrOfDays' | 'onChange' | 'singleDate'
>;
const defaultProps: DefaultProps = {
  basic: false,
  dates: [null, null],
  icons: {
    changeMonth: {
      next: <span data-testid="icon">{arrowRight}</span>,
      prev: <span data-testid="icon">{arrowLeft}</span>,
    },
  },
  locale: 'en-GB',
  nrOfDays: 365,
  onChange: () => {},
  singleDate: false,
};

const Test = (props: OverrideWithOptional<TestComponentProps, DefaultProps>) => (
  <TestComponent {...defaultProps} {...props} />
);
const today = new Date();
const tomorrow = new Date(today);
tomorrow.setDate(tomorrow.getDate() + 1);
afterEach(cleanup);

describe('Datepicker', () => {
  describe('Dates', () => {
    test('sets no days as selected with no day out and no day home', () => {
      const { queryByTestId } = render(<Test />);
      const selectedDates = queryByTestId('datepicker-day-selected');
      expect(selectedDates).not.toBeInTheDocument();
    });
    test('sets days as selected with out and home dates', () => {
      const { getAllByTestId } = render(<Test dates={[today, tomorrow]} />);
      const selectedDates = getAllByTestId('datepicker-day-selected');
      expect(selectedDates).toHaveLength(2);
    });
    test('sets day as selected with out date', () => {
      const { getAllByTestId } = render(<Test dates={[today, null]} />);
      const selectedDates = getAllByTestId('datepicker-day-selected');
      expect(selectedDates).toHaveLength(1);
    });
    test('sets day as selected with home date', () => {
      const { getAllByTestId } = render(<Test dates={[null, today]} />);
      const selectedDates = getAllByTestId('datepicker-day-selected');
      expect(selectedDates).toHaveLength(1);
    });
  });
  describe('Icons', () => {
    test('sets prev and next month icon', () => {
      const { getAllByTestId } = render(<Test />);
      const monthIcons = getAllByTestId('icon');
      expect(monthIcons).toHaveLength(2);
    });
  });

  describe('OnChange', () => {
    let data: TDate | null | TDates = null;
    test('sets inital data to nullish array', () => {
      data = null;
      expect(data).toBeNull();
      render(<Test onChange={(dates) => (data = dates)} />);
      expect(data).toHaveLength(2);
      if (data && Array.isArray(data)) {
        expect(data[0]).toBeNull();
        expect(data[1]).toBeNull();
      }
    });
    test('gets out date on change', () => {
      data = null;
      expect(data).toBeNull();
      const { getAllByTestId } = render(<Test onChange={(dates) => (data = dates)} />);
      const days = getAllByTestId('datepicker-day-active');
      expect(days).toBeDefined();

      fireEvent.click(days[0]);
      data && expect(data[0]).not.toBeNull();
      expect(data).toHaveLength(2);
    });
    test('gets home date on change', () => {
      data = null;
      expect(data).toBeNull();
      const { getAllByTestId } = render(<Test onChange={(dates) => (data = dates)} />);
      const days = getAllByTestId('datepicker-day-active');
      expect(days).toBeDefined();

      fireEvent.click(days[0]);
      fireEvent.click(days[1]);

      data && expect(data[0]).not.toBeNull();
      data && expect(data[1]).not.toBeNull();

      expect(data).toHaveLength(2);
    });

    test('change out date if home date is picked', () => {
      data = null;
      expect(data).toBeNull();
      const { getAllByTestId } = render(<Test onChange={(dates) => (data = dates)} />);
      const days = getAllByTestId('datepicker-day-active');
      expect(days).toBeDefined();

      fireEvent.click(days[0]);
      fireEvent.click(days[1]);

      const out = data ? data[0] : null;
      const home = data ? data[1] : null;

      expect(out).not.toBeNull();
      expect(home).not.toBeNull();

      fireEvent.click(days[2]);
      data && expect(out).not.toMatchObject(data[0]);
      data && expect(data[1]).toBeNull();
      expect(data).toHaveLength(2);
    });
    test('remove home date if new date is in the future', () => {
      data = null;
      expect(data).toBeNull();
      const { getAllByTestId } = render(<Test onChange={(dates) => (data = dates)} />);
      const days = getAllByTestId('datepicker-day-active');
      expect(days).toBeDefined();

      fireEvent.click(days[0]);
      fireEvent.click(days[1]);
      fireEvent.click(days[2]);

      data && expect(data[1]).toBeNull();
    });
  });
  describe('Number of days', () => {
    test('sets correct number of days', async () => {
      const { getAllByTestId } = render(<Test nrOfDays={31} />);
      const days = getAllByTestId('datepicker-day', { exact: false });
      await waitFor(() => expect(days).toHaveLength(31));
    });
  });
});

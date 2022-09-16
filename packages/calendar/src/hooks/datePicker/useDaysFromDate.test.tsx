import { act, renderHook } from '@testing-library/react-hooks';
import {
  datesAreOnSameDay,
  IDayInMonth,
  IDaysFromDate,
  isDateBetweenTwoDates,
  useDaysFromDate,
} from './useDaysFromDate';

type DefaultProps = Pick<IDaysFromDate, 'date' | 'locale' | 'nrOfDays'>;
const defaultProps: DefaultProps = {
  date: new Date(2060, 11, 24),
  locale: 'en-GB',
  nrOfDays: 1,
};

const fakeDay: IDayInMonth[] = [
  {
    date: new Date('2060-11-27T23:00:00.000Z'),
    weekday: 'Sun',
    weekdayNr: 0,
    today: false,
    day: 28,
    monthFull: 'November',
    monthNr: 10,
    month: 'Nov',
    monthBreak: true,
    year: 2060,
  },
];

test('get correct days', () => {
  const { result } = renderHook(() => useDaysFromDate({ ...defaultProps }));
  act(() => result.current.onGetDays());
  expect(result.current.days).toMatchObject(fakeDay);
});

test('get correct nr days', () => {
  const { result } = renderHook(() => useDaysFromDate({ ...defaultProps, nrOfDays: 10 }));
  act(() => result.current.onGetDays());
  expect(result.current.days).toHaveLength(10);
});

test('get correct mont', () => {
  const { result } = renderHook(() => useDaysFromDate({ ...defaultProps }));
  act(() => result.current.onGetDays());
  const fakeMonth = [fakeDay];
  expect(result.current.months).toMatchObject(fakeMonth);
});

const past = new Date(2060, 11, 24);
const now = new Date(2060, 11, 25);
const future = new Date(2060, 11, 26);

test('same day', () => {
  const pastFuture = datesAreOnSameDay(past, future);
  const futurePast = datesAreOnSameDay(future, past);

  const sameDay = datesAreOnSameDay(past, past);

  expect(pastFuture).toBeFalsy();
  expect(futurePast).toBeFalsy();
  expect(sameDay).toBeTruthy();
});

test('between two dates', () => {
  const between = isDateBetweenTwoDates({ fromDate: past, toDate: future, givenDate: now });
  const inFuture = isDateBetweenTwoDates({ fromDate: past, toDate: now, givenDate: future });
  const inPast = isDateBetweenTwoDates({ fromDate: now, toDate: future, givenDate: past });

  const sameDay = isDateBetweenTwoDates({ fromDate: now, toDate: now, givenDate: now });

  expect(inFuture).toBeFalsy();
  expect(inPast).toBeFalsy();
  expect(sameDay).toBeFalsy();
  expect(between).toBeTruthy();
});

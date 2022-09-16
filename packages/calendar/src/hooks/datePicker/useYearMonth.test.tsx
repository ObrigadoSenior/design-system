import { act, renderHook } from '@testing-library/react-hooks';
import { IUseYearMonth, useYearMonth } from './useYearMonth';

const now = new Date(2060, 11, 24);

type DefaultProps = IUseYearMonth;
const defaultProps: DefaultProps = {
  date: now,
  locale: 'en-GB',
};

const year = 2060;
const month = 10;

test('get active date', () => {
  const { result } = renderHook(() => useYearMonth({ ...defaultProps }));
  act(() => result.current.onSetYearAndMonthNr({ year, month }));
  expect(result.current.activeDate).toMatchObject(new Date(year, month));
});
test('get active month number', () => {
  const { result } = renderHook(() => useYearMonth({ ...defaultProps }));
  act(() => result.current.onSetYearAndMonthNr({ year, month }));
  expect(result.current.activeMonthNr).toBe(month);
});
test('get active month', () => {
  const { result } = renderHook(() => useYearMonth({ ...defaultProps }));
  act(() => result.current.onSetYearAndMonthNr({ year, month }));
  expect(result.current.activeMonth).toBe('November');
});
test('get active year', () => {
  const { result } = renderHook(() => useYearMonth({ ...defaultProps }));
  act(() => result.current.onSetYearAndMonthNr({ year, month }));
  expect(result.current.activeYear).toBe(year);
});

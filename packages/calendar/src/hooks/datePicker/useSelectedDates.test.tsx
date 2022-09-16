import { act, renderHook } from '@testing-library/react-hooks';
import { IUseSelectedDates, TDates } from '../../models';
import { useSelectedDates } from './useSelectedDates';

type DefaultProps = Pick<IUseSelectedDates, 'defaultDates'>;
const defaultProps: DefaultProps = {
  defaultDates: [null, null],
};
const past = new Date(2060, 11, 23);
const now = new Date(2060, 11, 24);
const future = new Date(2060, 11, 25);

test('set out date', () => {
  const { result } = renderHook(() => useSelectedDates({ ...defaultProps }));
  const oldDates = defaultProps.defaultDates as TDates;
  act(() => result.current.onSetSelectedDate(now, oldDates));
  expect(result.current.selectedDates).toMatchObject([now, null]);
});

test('set home date', () => {
  const { result } = renderHook(() => useSelectedDates({ ...defaultProps }));
  const oldDates = [now, null] as TDates;
  act(() => result.current.onSetSelectedDate(future, oldDates));
  expect(result.current.selectedDates).toMatchObject([oldDates[0], future]);
});

test('reset home date when choosing future out date', () => {
  const { result } = renderHook(() => useSelectedDates({ ...defaultProps }));
  const oldDates = [past, now] as TDates;
  act(() => result.current.onSetSelectedDate(future, oldDates));
  expect(result.current.selectedDates).toMatchObject([future, null]);
});

test('swap dates if home date is in the past', () => {
  const { result } = renderHook(() => useSelectedDates({ ...defaultProps }));
  const oldDates = [now, null] as TDates;
  act(() => result.current.onSetSelectedDate(past, oldDates));
  expect(result.current.selectedDates).toMatchObject([past, oldDates[0]]);
});

test('get single date from selected date', () => {
  const { result } = renderHook(() => useSelectedDates({ ...defaultProps }));
  const oldDates = [now, future] as TDates;
  act(() => result.current.onSetSelectedDate(future, oldDates));
  expect(result.current.selectedDate).toMatchObject(future);
});

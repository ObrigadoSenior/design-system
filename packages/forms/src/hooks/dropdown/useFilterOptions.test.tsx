import { close } from '@obrigadosenior/icons';
import { renderHook, act } from '@testing-library/react-hooks';
import { useFilterOptions } from './useFilterOptions';

const options = [
  {
    title: 'Sweden',
    value: 'swe',
    id: 'swe',
    data: '0',
  },
  {
    title: 'Denmark',
    value: 'dnk',
    id: 'dnk',
    data: '1',
    leftIcon: close,
  },
];
test('change options on new typed value', () => {
  const { result } = renderHook(() => useFilterOptions({ options }));
  act(() => result.current.onSetFilteredOptions('denm'));
  expect(result.current.filteredOptions).toMatchObject([options[1]]);
});

test('set active option', () => {
  const { result } = renderHook(() => useFilterOptions({ options }));
  act(() => result.current.onClickFilterOptions('swe'));
  expect(result.current.activeOption).toMatchObject(options[0]);
});

test('gets filter options as options', () => {
  const { result } = renderHook(() => useFilterOptions({ options }));
  expect(result.current.filteredOptions).toMatchObject(options);
});

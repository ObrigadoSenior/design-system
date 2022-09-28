import { cleanup, render, waitFor, fireEvent } from '@testing-library/react';
import React from 'react';
import { Dropdown as TestComponent } from '.';
import { OverrideWithOptional } from '../../../../../utils/functions/overrideWIthOptional';
import { DropdownOptionProps, DropdownProps as TestComponentProps } from '../../types';

const options: DropdownOptionProps[] = [
  {
    title: 'Option 1',
    value: 'option1',
    id: 'opt1',
    data: '1',
    icon: { icon: <></> },
  },
  {
    title: 'Option 2',
    value: 'option2',
    id: 'opt2',
    data: '2',
    icon: { icon: <></> },
    disabled: true,
  },
];

type DefaultProps = Pick<
  TestComponentProps,
  'title' | 'placeholder' | 'onChange' | 'options' | 'onOptionClick' | 'onToggleOpen'
>;
const defaultProps: DefaultProps = {
  title: 'Title',
  placeholder: 'Placeholder',
  onChange: () => {},
  onOptionClick: () => {},
  onToggleOpen: () => {},
  options,
};

afterEach(cleanup);

const Test = (props: OverrideWithOptional<TestComponentProps, DefaultProps>) => (
  <TestComponent {...defaultProps} {...props} />
);

describe('Dropdown', () => {
  test('sets title', () => {
    const { getByText } = render(<Test />);
    expect(getByText('Title')).toBeDefined();
  });
  test('opens dropdown content onClick', async () => {
    const { getByTestId, rerender } = render(<Test />);
    fireEvent.click(getByTestId('input'));
    rerender(<Test />);
    await waitFor(() => expect(getByTestId('dropdown-content')).toBeInTheDocument());
    await waitFor(() => expect(getByTestId('dropdown-content')).toHaveClass('open'));
  });

  test('close dropdown content on onClick', async () => {
    const { getByTestId, rerender } = render(<Test />);
    fireEvent.click(getByTestId('input'));
    rerender(<Test />);
    await waitFor(() => expect(getByTestId('dropdown-content')).toBeInTheDocument());
    await waitFor(() => expect(getByTestId('dropdown-content')).toHaveClass('open'));
    fireEvent.click(getByTestId('input'));
    rerender(<Test />);
    await waitFor(() => expect(getByTestId('dropdown-content')).toHaveClass('close'));
  });

  test('render options', () => {
    const { getByTestId } = render(<Test />);
    expect(getByTestId('dropdown-content')).toBeDefined();
    expect(getByTestId('dropdown-content-ul')).toBeDefined();
    expect(getByTestId('dropdown-content-ul').querySelectorAll('li')).toHaveLength(2);
  });

  test('options are clickable and data is received', () => {
    let data = null;
    const { getAllByTestId } = render(<Test onOptionClick={(options) => (data = options)} />);
    expect(data).toBeNull();
    expect(getAllByTestId('dropdown-content-button')).toBeDefined();
    fireEvent.click(getAllByTestId('dropdown-content-button')[0]);
    expect(data).toEqual(options[0]);
  });
  test('options are not clickable when disabled', () => {
    let data = null;
    const { getAllByTestId } = render(<Test onOptionClick={(options) => (data = options)} />);
    expect(data).toBeNull();
    expect(getAllByTestId('dropdown-content-button')).toBeDefined();
    fireEvent.click(getAllByTestId('dropdown-content-button')[1]);
    expect(data).toBeNull();
  });
});

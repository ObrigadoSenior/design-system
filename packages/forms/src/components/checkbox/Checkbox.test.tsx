import { render, cleanup, fireEvent } from '@testing-library/react';
import React from 'react';
import { Checkbox as TestComponent } from '.';
import { CheckboxProps as TestComponentProps } from '../../types';
import { OverrideWithOptional } from '../../../../../utils/functions/overrideWIthOptional';

type DefaultProps = Pick<TestComponentProps, 'label' | 'onChange'>;

const defaultProps: DefaultProps = {
  label: 'Label',
  onChange: () => {},
};

afterEach(cleanup);

const Test = (props: OverrideWithOptional<TestComponentProps, DefaultProps>) => (
  <TestComponent {...defaultProps} {...props} />
);

describe('Checkbox', () => {
  test('sets label', () => {
    const { getByTestId } = render(<Test />);
    expect(getByTestId('text').textContent).toBe('Label');
  });
  test('calls onClick prop when clicked', () => {
    const handleClick = jest.fn();
    const { getByTestId } = render(<Test onChange={handleClick} />);
    fireEvent.click(getByTestId('checkbox'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('if unchecked and clicked - set checked ', () => {
    let checked = false;
    const { getByTestId, rerender } = render(<Test checked={checked} onChange={() => (checked = true)} />);
    fireEvent.click(getByTestId('checkbox'));
    rerender(<Test checked={checked} onChange={() => (checked = false)} />);
    expect(getByTestId('input')).toBeChecked();
  });

  test('if checked and clicked - set unchecked ', () => {
    let checked = true;
    const { getByTestId, rerender } = render(<Test checked={checked} onChange={() => (checked = false)} />);
    fireEvent.click(getByTestId('checkbox'));
    rerender(<Test checked={checked} onChange={() => (checked = true)} />);
    expect(getByTestId('input')).not.toBeChecked();
  });

  test('if disabled - dont call onClick prop', () => {
    const handleClick = jest.fn();
    const { getByTestId } = render(<Test disabled onChange={handleClick} />);
    fireEvent.click(getByTestId('checkbox'));
    expect(handleClick).toHaveBeenCalledTimes(0);
  });
});

import { render, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { Radio as TestComponent } from '.';
import { RadioProps as TestComponentProps } from '../../types';
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

describe('Radio', () => {
  test('sets label', () => {
    const { getByTestId } = render(<Test />);
    expect(getByTestId('text').textContent).toBe('Label');
  });
  test('calls onClick prop when clicked', () => {
    const handleClick = jest.fn();
    const { getByTestId } = render(<Test onChange={handleClick} />);
    userEvent.click(getByTestId('radio'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('if unchecked and clicked - set checked ', () => {
    let checked = false;
    const { getByTestId, rerender } = render(<Test checked={checked} onChange={() => (checked = true)} />);
    userEvent.click(getByTestId('radio'));
    rerender(<Test checked={checked} onChange={() => (checked = false)} />);
    expect(getByTestId('input')).toBeChecked();
  });

  test('if checked and clicked - do nothing', () => {
    let checked = true;
    const { getByTestId, rerender } = render(<Test checked={checked} onChange={() => (checked = false)} />);
    expect(getByTestId('input')).toBeChecked();
    userEvent.click(getByTestId('radio'));
    rerender(<Test checked={checked} onChange={() => (checked = true)} />);
    expect(getByTestId('input')).toBeChecked();
  });
  test('if disabled - dont call onClick prop', () => {
    const handleClick = jest.fn();
    const { getByTestId } = render(<Test disabled onChange={handleClick} />);
    userEvent.click(getByTestId('radio'));
    expect(handleClick).toHaveBeenCalledTimes(0);
  });
});

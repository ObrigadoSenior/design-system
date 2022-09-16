import { close } from '@obrigadosenior/icons';
import { render, cleanup, fireEvent } from '@testing-library/react';
import React from 'react';
import { Button as TestComponent } from '.';
import { IButtonProps as TestComponentProps } from '../../models';
import { OverrideWithOptional } from '../../../../../utils';

type DefaultProps = Pick<TestComponentProps, 'label' | 'size' | 'buttonType' | 'onClick'>;
const defaultProps: DefaultProps = {
  label: 'Label',
  buttonType: 'primary',
  size: 's',
  onClick: () => {},
};
afterEach(cleanup);

const Test = (props: OverrideWithOptional<TestComponentProps, DefaultProps>) => (
  <TestComponent {...defaultProps} {...props} />
);

describe('Button', () => {
  test('sets label', () => {
    const { getByTestId } = render(<Test />);
    expect(getByTestId('text').textContent).toBe('Label');
  });
  test('calls onClick prop when clicked', () => {
    const handleClick = jest.fn();
    const { getByTestId } = render(<Test leftIcon={{ icon: close }} onClick={handleClick} />);
    fireEvent.click(getByTestId('button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
  test('left icon can be added', () => {
    const { getByTestId } = render(<Test leftIcon={{ icon: close }} />);
    expect(getByTestId('icon')).toBeInTheDocument();
  });
  test('right icon can be added', () => {
    const { getByTestId } = render(<Test rightIcon={{ icon: close }} />);
    expect(getByTestId('icon')).toBeInTheDocument();
  });
  test('can set full width', () => {
    const { getByTestId } = render(<Test fullWidth />);
    expect(getByTestId('button')).toHaveClass('button-full-width');
  });
  test('can change type', () => {
    const { getByTestId } = render(<Test buttonType="secondary" />);
    expect(getByTestId('button')).toHaveClass('button-secondary');
  });
});

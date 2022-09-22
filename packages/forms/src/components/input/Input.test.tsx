import { cleanup, render, fireEvent } from '@testing-library/react';
import React from 'react';
import { Input as TestComponent } from '.';
import { OverrideWithOptional } from '../../../../../utils/functions/overrideWIthOptional';
import { IInputProps as TestComponentProps } from '../../models';

type DefaultProps = Pick<
  TestComponentProps,
  'title' | 'leftIcon' | 'placeholder' | 'rightIcon' | 'defaultValue' | 'onChange' | 'height'
>;

const defaultProps: DefaultProps = {
  title: 'Title',
  placeholder: 'Placeholder',
  leftIcon: <></>,
  rightIcon: <></>,
  defaultValue: '',
  height: 'xl',
  onChange: () => {},
};

afterEach(cleanup);

const Test = (props: OverrideWithOptional<TestComponentProps, DefaultProps>) => (
  <TestComponent {...defaultProps} {...props} />
);

describe('Input', () => {
  test('sets title', () => {
    const { getByText } = render(<Test />);
    expect(getByText('Title')).toBeInTheDocument();
  });
  test('sets placeholder', () => {
    const { getByPlaceholderText } = render(<Test />);
    expect(getByPlaceholderText('Placeholder')).toBeInTheDocument();
  });
  test('sets icons', () => {
    const { getAllByTestId } = render(<Test />);
    expect(getAllByTestId('icon')).toBeDefined();
    expect(getAllByTestId('icon')).toHaveLength(2);
  });
  test('sets default value', () => {
    const { getByTestId } = render(<Test defaultValue="Def.value" />);
    expect(getByTestId('input').getAttribute('value')).toMatch('Def.value');
  });
  test('sets height', () => {
    const { getByTestId } = render(<Test height="s" />);
    expect(getByTestId('input-wrapper')).toHaveClass('input-height-s');
  });
  test('onChange value', () => {
    const { getByTestId } = render(<Test height="s" />);
    fireEvent.change(getByTestId('input'), { target: { value: 'Changing text' } });
    expect(getByTestId('input').getAttribute('value')).toMatch('Changing text');
  });
});

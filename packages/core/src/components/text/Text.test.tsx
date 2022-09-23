import { cleanup, render } from '@testing-library/react';
import React from 'react';
import { Text as TestComponent } from '.';
import { TextProps } from '../../models';

afterEach(cleanup);

const Test = ({ children, ...rest }: TextProps) => (
  <TestComponent size="m" type="primary" {...rest}>
    {children}
  </TestComponent>
);

describe('Text', () => {
  test('renders', () => {
    const { getByTestId } = render(<Test tag="span">Text</Test>);
    expect(getByTestId('text-wrapper')).toBeInTheDocument();
  });
  test('sets size', () => {
    const { getByTestId } = render(
      <Test tag="span" size="xl">
        Text
      </Test>,
    );
    expect(getByTestId('text')).toHaveClass('text-xl');
  });

  test('sets type', () => {
    const { getByTestId } = render(
      <Test tag="span" type="secondary">
        Text
      </Test>,
    );
    expect(getByTestId('text')).toHaveClass('text-secondary');
  });
  test('sets weight', () => {
    const { getByTestId } = render(
      <Test tag="span" weight="bold">
        Text
      </Test>,
    );
    expect(getByTestId('text')).toHaveClass('text-bold');
  });
  test('sets tag', () => {
    const { getByTestId } = render(<Test tag="h4">Text</Test>);
    expect(getByTestId('text').tagName).toBe('H4');
  });
});

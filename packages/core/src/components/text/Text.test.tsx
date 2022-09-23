import { cleanup, render } from '@testing-library/react';
import React from 'react';
import { Text as TestComponent } from '.';
import { TextProps } from '../../types';

afterEach(cleanup);

const Test = ({ children, ...rest }: TextProps) => (
  <TestComponent size="m" type="primary" {...rest}>
    {children}
  </TestComponent>
);

describe('Text', () => {
  test('renders', () => {
    const { getByTestId } = render(<Test tag="span">Text</Test>);
    expect(getByTestId('text')).toBeInTheDocument();
  });
  test('sets tag', () => {
    const { getByTestId } = render(<Test tag="h4">Text</Test>);
    expect(getByTestId('text').tagName).toBe('H4');
  });
});

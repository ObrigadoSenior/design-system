import { cleanup, render } from '@testing-library/react';
import React from 'react';
import { Terminal } from '.';
import { TerminalProps } from '../../types';

afterEach(cleanup);

describe('Terminal', () => {
  test('renders', () => {
    const { getByTestId } = render(<Terminal />);
    expect(getByTestId('text')).toBeInTheDocument();
  });
});

import { render, cleanup, fireEvent } from '@testing-library/react';
import React from 'react';
import { Button } from '.';

afterEach(cleanup);

describe('Button', () => {
  test('sets label', () => {
    const { getByTestId } = render(<Button onClick={() => {}} label="Label" />);
    expect(getByTestId('text').textContent).toBe('Label');
  });
  test('calls onClick prop when clicked', () => {
    const handleClick = jest.fn();
    const { getByTestId } = render(<Button icon={{ icon: <></> }} onClick={handleClick} />);
    fireEvent.click(getByTestId('button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
  test('left icon can be added', () => {
    const { getByTestId } = render(<Button icon={{ icon: <></> }} onClick={() => {}} />);
    expect(getByTestId('icon')).toBeInTheDocument();
  });
  test('can set full width', () => {
    const { getByTestId } = render(<Button label="Label" width="100%" onClick={() => {}} />);
    expect(getByTestId('button')).toHaveStyle('width: 100%');
  });
});

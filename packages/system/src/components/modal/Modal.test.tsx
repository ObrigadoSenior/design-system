import { close } from '@obrigadosenior/icons';
import { cleanup, render, fireEvent, waitFor } from '@testing-library/react';
import React from 'react';
import { Modal as TestComponent } from '.';
import { OverrideWithOptional } from '../../../../../utils';
import { IModalProps as TestComponentProps } from '../../models';
import { Text } from '@obrigadosenior/core';

type DefaultProps = Pick<TestComponentProps, 'title' | 'open' | 'onClick' | 'closeIcon'>;
const defaultProps: DefaultProps = {
  title: <Text>Title</Text>,
  open: false,
  onClick: () => {},
  closeIcon: { icon: close },
};

afterEach(cleanup);

const Test = (props: OverrideWithOptional<TestComponentProps, DefaultProps>) => (
  <TestComponent {...defaultProps} {...props} />
);
const Children = <span data-testid="modal-children">Test with children</span>;

describe('Modal', () => {
  test('sets title', () => {
    const { getByText } = render(<Test>{Children}</Test>);
    expect(getByText('Title')).toBeInTheDocument();
  });
  test('sets icon', () => {
    const { getByTestId } = render(<Test>{Children}</Test>);
    expect(getByTestId('icon')).toBeInTheDocument();
  });
  test('opens', () => {
    const { getByTestId } = render(<Test open={true}>{Children}</Test>);
    expect(getByTestId('modal')).toHaveClass('open');
  });
  test('closes', async () => {
    let open = true;
    const { getByTestId, rerender } = render(
      <Test open={open} onClick={() => (open = false)}>
        {Children}
      </Test>,
    );
    fireEvent.click(getByTestId('button'));
    rerender(
      <Test open={open} onClick={() => (open = false)}>
        {Children}
      </Test>,
    );
    expect(getByTestId('modal')).toHaveClass('close');
    await waitFor(() => expect(getByTestId('modal')).toHaveClass('hide'), { timeout: 5000 });
  });
  test('renders overlay on modal open', async () => {
    let open = true;
    const { getByTestId } = render(
      <Test open={open} onClick={() => (open = false)}>
        {Children}
      </Test>,
    );
    expect(getByTestId('modal-overlay')).toBeDefined;
  });

  test('hides modal overlay on close', async () => {
    let open = true;
    const { getByTestId, rerender } = render(
      <Test open={open} onClick={() => (open = false)}>
        {Children}
      </Test>,
    );
    fireEvent.click(getByTestId('button'));
    rerender(
      <Test open={open} onClick={() => (open = true)}>
        {Children}
      </Test>,
    );
    expect(getByTestId('modal-overlay')).toHaveClass('close');
  });
  test('render children', async () => {
    const { getByTestId } = render(<Test>{Children}</Test>);
    expect(getByTestId('modal-children')).toBeInTheDocument();
  });
});

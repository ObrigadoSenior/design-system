import { close } from '@obrigado-senior/icons';
import { cleanup, render, waitFor, fireEvent } from '@testing-library/react';
import React from 'react';
import { SettingButton as TestComponent, ISettingButton as TestComponentProps } from '.';
import { Button } from '..';
import { OverrideWithOptional } from '../../../../../../utils';

const options = [
  {
    title: 'Option',
    id: 'opt0',
    icon: close,
  },
  {
    title: 'Option 1',
    id: 'opt1',
    icon: close,
  },
];

const renderOptions = () => {
  return (
    <ul data-testid="modal-content-ul">
      {options.map(({ title, id, icon }) => (
        <li key={id}>
          <Button buttonType="primary" leftIcon={{ icon, size: 'm' }} label={title} onClick={() => console.log()} />
        </li>
      ))}
    </ul>
  );
};

type DefaultProps = Pick<
  TestComponentProps,
  'settingTitle' | 'settingIcon' | 'closeIcon' | 'options' | 'open' | 'setOpen'
>;
const defaultProps: DefaultProps = {
  settingTitle: 'Title',
  settingIcon: { icon: close },
  closeIcon: { icon: close },
  open: false,
  setOpen: () => {},
  options: renderOptions(),
};

afterEach(cleanup);

const Test = (props: OverrideWithOptional<TestComponentProps, DefaultProps>) => (
  <TestComponent {...defaultProps} {...props} />
);

describe('Setting Button', () => {
  test('opens modal window onClick', async () => {
    let open = false;
    const { getByTestId, rerender } = render(<Test open={open} setOpen={() => (open = true)} />);
    fireEvent.click(getByTestId('setting-button'));
    rerender(<Test open={open} setOpen={() => (open = true)} />);
    expect(getByTestId('modal')).toBeInTheDocument();
    expect(getByTestId('modal')).toHaveClass('open');
  });

  test('close modal window and hides it onClick', async () => {
    let open = true;
    const { getByTestId, rerender } = render(<Test open={open} setOpen={() => (open = false)} />);
    fireEvent.click(getByTestId('setting-button'));
    rerender(<Test open={open} setOpen={() => (open = true)} />);
    expect(getByTestId('modal')).toHaveClass('close');
    await waitFor(() => expect(getByTestId('modal')).toHaveClass('hide'), { timeout: 5000 });
  });

  test('renders overlay on modal open', async () => {
    let open = true;
    const { getByTestId } = render(<Test open={open} setOpen={() => (open = false)} />);
    expect(getByTestId('modal-overlay')).toBeDefined;
  });

  test('hides modal overlay on close', async () => {
    let open = true;
    const { getByTestId, rerender } = render(<Test open={open} setOpen={() => (open = false)} />);
    fireEvent.click(getByTestId('setting-button'));
    rerender(<Test open={open} setOpen={() => (open = true)} />);
    expect(getByTestId('modal-overlay')).toHaveClass('close');
  });

  test('sets title', () => {
    const { getByText } = render(<Test />);
    expect(getByText('Title')).toBeDefined();
  });

  test('render options', () => {
    const { getByTestId } = render(<Test />);
    expect(getByTestId('modal-content')).toBeDefined();
    expect(getByTestId('modal-content-ul')).toBeDefined();
    expect(getByTestId('modal-content-ul').querySelectorAll('li')).toHaveLength(2);
  });
});

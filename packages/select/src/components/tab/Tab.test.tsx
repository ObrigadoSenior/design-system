import { close } from '@obrigado-senior/icons';
import { cleanup, fireEvent, render } from '@testing-library/react';
import React from 'react';
import { Tab as TestComponent } from '.';
import { OverrideWithOptional } from '../../../../../utils';
import { ITabOption, ITabProps as TestComponentProps } from '../../models';

const options: ITabOption[] = [
  {
    title: 'Option',
    id: 'opt0',
    leftIcon: { icon: close, size: 'm' },
  },
  {
    title: 'Option 2',
    id: 'opt2',
    disabled: true,
    leftIcon: { icon: close, size: 'm' },
  },
];

type DefaultProps = Pick<TestComponentProps, 'activeOption' | 'onOptionClick' | 'options'>;
const defaultProps: DefaultProps = {
  onOptionClick: () => {},
  options,
  activeOption: undefined,
};

afterEach(cleanup);

const Test = (props: OverrideWithOptional<TestComponentProps, DefaultProps>) => (
  <TestComponent {...defaultProps} {...props} />
);

describe('Tab', () => {
  test('on option click', () => {
    let data = null;
    const { getAllByTestId } = render(<Test onOptionClick={(options) => (data = options)} />);
    expect(data).toBeNull();
    expect(getAllByTestId('tab-option')).toBeDefined();
    fireEvent.click(getAllByTestId('tab-option')[0]);
    expect(data).toEqual(options[0]);
  });
  test('on option click if disabled', () => {
    let data = null;
    const { getAllByTestId } = render(<Test onOptionClick={(options) => (data = options)} />);
    expect(data).toBeNull();
    expect(getAllByTestId('tab-option')).toBeDefined();
    fireEvent.click(getAllByTestId('tab-option')[1]);
    expect(data).toBeNull();
  });
  test('render options', () => {
    const { getByTestId, getAllByTestId } = render(<Test />);
    expect(getByTestId('tab')).toBeDefined();
    expect(getAllByTestId('tab-option')).toHaveLength(2);
  });
  test('active option is set', () => {
    const { getAllByTestId } = render(<Test activeOption={options[0]} />);
    expect(getAllByTestId('tab-option-wrapper')[0]).toHaveClass('active');
  });
});

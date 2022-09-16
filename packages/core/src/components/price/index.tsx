import React from 'react';
import { ITextProps } from '../../models';
import { Text } from '../text';
import './priceStyle.css';

interface IPriceColumn {
  value: string;
  props?: ITextProps;
}

export interface IPriceProps {
  left: IPriceColumn;
  middle: IPriceColumn;
  right: IPriceColumn;
  width?: ITextProps['width'];
}

export const Price = ({ left, middle, right, width = 'auto' }: IPriceProps): JSX.Element => {
  return (
    <div className="price">
      <Text className="left" size="s" fontStyle="italic" width={width} {...left.props}>
        {left.value}
      </Text>
      <Text className="middle" size="xl" fontStyle="italic" weight="bold" width={width} {...middle.props}>
        {middle.value}
      </Text>
      <Text className="right" size="s" fontStyle="italic" width={width} {...right.props}>
        {right.value}
      </Text>
    </div>
  );
};

import { Text } from '../../../../packages/core';
import React from 'react';
import { copyToClipboard } from '../../design-system-utils';
import './style.css';

export interface IDesignSystemCopyButton {
  value: string;
  message?: {
    bgColor?: string;
    textColor?: string;
  };
}

export const DesignSystemCopyButton = ({ value, message }: IDesignSystemCopyButton): JSX.Element => {
  return (
    <button className="copy--button" onClick={() => copyToClipboard({ value, ...message })}>
      <Text size="xs">{value}</Text>
    </button>
  );
};

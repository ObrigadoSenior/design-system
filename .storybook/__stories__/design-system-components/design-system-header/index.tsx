import { Text } from '../../../../packages/core';
import React from 'react';
import { travelColors } from '../../../../travelTheme';
import './style.css';

interface IStoriesHeader {
  preHeader: string;
  header: string;
  text?: string;
}

export const StoriesHeader = ({ preHeader, header, text }: IStoriesHeader): JSX.Element => {
  return (
    <div className="stories--header">
      <Text color={travelColors.silver} tag="h5" fontStyle='italic' size="s">
        {preHeader}
      </Text>
      <Text color={travelColors.mussla} tag="h2" size="xl">
        {header}
      </Text>
      <Text size="s">
        {text}
      </Text>
    </div>
  );
};

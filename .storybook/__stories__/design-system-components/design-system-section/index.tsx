import { Text } from '../../../../packages/core';
import React, { ReactNode } from 'react';
import { travelColors } from '../../../../travelTheme';
import './style.css';

interface IStoriesSection {
  header: string;
  children: ReactNode;
}

export const StoriesSection = ({ header, children }: IStoriesSection): JSX.Element => {
  return (
    <div className="stories--section">
      <Text color={travelColors.mussla} tag="h3" size="l">
        {header}
      </Text>
      <span className="stories--section--paragraph">{children}</span>
    </div>
  );
};

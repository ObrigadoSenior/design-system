import React, { ReactNode } from 'react';
import './style.css';

interface IStoriesWrapper {
  children: ReactNode;
}

export const StoriesWrapper = ({ children }: IStoriesWrapper): JSX.Element => {
  return <div className="stories--wrapper">{children}</div>;
};

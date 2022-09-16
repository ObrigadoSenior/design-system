import * as React from 'react';
import './storiesDividerStyle.css';

export interface IStoriesDivider {
  labels: string[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children: any;
  overflow?: 'visible' | 'hidden';
}

const renderChildren = ({ children, labels }: IStoriesDivider) =>
  children.map((child: any, index: number) => (
    <div className="flex-item" key={index}>
      <h3 className="flex-label">{labels[index]}</h3>
      <div className="flex-child">{child}</div>
    </div>
  ));

const renderChild = ({ children, labels }: IStoriesDivider) => (
  <div className="flex-item" key="1">
    <h3>{labels ? labels[0] : 'No Label'}</h3>
    <div className="flex-child">{children}</div>
  </div>
);

export const StoriesDivider = ({ children, labels, overflow = 'visible' }: IStoriesDivider): JSX.Element => {
  return (
    <div className={`flex-system ${overflow}`}>
      {Array.isArray(children) ? renderChildren({ children, labels }) : renderChild({ children, labels })}
    </div>
  );
};

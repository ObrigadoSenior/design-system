import { Icon } from '../icon';
import React from 'react';
import { ITextProps } from '../../models';
import './textStyle.css';

export const Text = ({
  children,
  size = 'm',
  type = 'primary',
  weight,
  tag = 'span',
  wrap = 'wrap',
  innerRef,
  className = '',
  leftIcon,
  rightIcon,
  fontStyle = 'normal',
  width = 'full',
  textClassName,
  ...rest
}: ITextProps): JSX.Element => {
  const text = React.createElement(
    tag,
    {
      className: `text text-${size} text-${type} text-${weight} text-${wrap} text-${fontStyle} ${textClassName}`,
      ref: innerRef,
      style: { ...rest },
      'data-testid': 'text',
    },
    children,
  );
  return (
    <span data-testid="text-wrapper" className={`text-outer text-${width} ${className}`}>
      {leftIcon && <Icon className={`left-icon ${type}`} {...leftIcon} />}
      {text}
      {rightIcon && <Icon className={`right-icon ${type}`} {...rightIcon} />}
    </span>
  );
};

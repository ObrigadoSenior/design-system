import React from 'react';
import { IButtonProps } from '../../models';
import { Text } from '../text';
import './buttonStyle.css';

export const Button = ({
  className = '',
  label,
  buttonType,
  size = 'm',
  labelSize = 'xxs',
  fullWidth = false,
  leftIcon,
  rightIcon,
  innerRef,
  ...rest
}: IButtonProps): JSX.Element => (
  <button
    className={`button button-${buttonType} button--size-${size} button--label-size-${labelSize} ${
      fullWidth ? 'button-full-width' : ''
    } ${className}`}
    ref={innerRef}
    data-testid="button"
    {...rest}
  >
    <Text className="button-label" size={labelSize} leftIcon={leftIcon} rightIcon={rightIcon}>
      {label}
    </Text>
  </button>
);

export * from './setting';

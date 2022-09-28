import React from 'react';
import { RadioProps } from '../../types';
import { Text } from '@obrigadosenior/core';
import './radioStyle.css';

export const Radio = ({ className = '', label, onChange, ...rest }: RadioProps): JSX.Element => {
  return (
    <label data-testid="radio" className={`radio-label ${className}`}>
      <input
        data-testid="input"
        className="radio-input"
        onChange={(event) => onChange && onChange(event)}
        type="radio"
        {...rest}
      />
      <span className="radio-checkmark" />
      <Text className="radio-label">{label}</Text>
    </label>
  );
};

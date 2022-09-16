import React from 'react';
import { IRadioProps } from '../../models';
import { Text } from '@obrigadosenior/core';
import './radioStyle.css';

export const Radio: React.FC<IRadioProps> = ({ className = '', label, onChange, ...rest }) => {
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

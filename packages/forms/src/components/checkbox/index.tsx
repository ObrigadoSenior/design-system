import React from 'react';
import { ICheckboxProps } from '../../models';
import { Text } from '@obrigado-senior/core';
import './checkboxStyle.css';

export const Checkbox: React.FC<ICheckboxProps> = ({ className = '', label, onChange, ...rest }) => {
  return (
    <label data-testid="checkbox" className={`checkbox-label ${className}`}>
      <input
        data-testid="input"
        className="checkbox-input"
        onChange={(event) => onChange && onChange(event)}
        {...rest}
        type="checkbox"
      />
      <span className="checkbox-checkmark" />
      <Text className="checkbox-label">{label}</Text>
    </label>
  );
};

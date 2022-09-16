import React from 'react';
import { ITabOptionsProps } from '../../models';
import { Text } from '@obrigadosenior/core';
import './tabStyle.css';

export const TabOptions = ({ options = [], onOptionsClick, activeOption }: ITabOptionsProps): JSX.Element => (
  <>
    {options.map(({ title, id, leftIcon, rightIcon, disabled }) => (
      <li
        data-testid="tab-option-wrapper"
        key={id}
        className={`tab-content ${activeOption?.id === id ? 'active' : ''}`}
      >
        <button
          data-testid="tab-option"
          disabled={disabled}
          key={id}
          onClick={() => onOptionsClick({ title, id, leftIcon, rightIcon, disabled })}
        >
          <Text className="tab-text" size="s" wrap="nowrap" leftIcon={leftIcon} rightIcon={rightIcon}>
            {title}
          </Text>
        </button>
      </li>
    ))}
  </>
);

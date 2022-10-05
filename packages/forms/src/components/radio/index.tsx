import React from 'react';
import cx from 'classnames';

import { RadioProps } from '../../types';
import { Text } from '@obrigado-senor/core';
import styles from './Radio.module.scss';

export const Radio = ({ className = '', label, onChange, ...rest }: RadioProps): JSX.Element => {
  return (
    <label data-testid="radio" className={cx(styles.container, className)}>
      <input
        data-testid="input"
        className={styles.radio_input}
        onChange={(event) => onChange && onChange(event)}
        type="radio"
        {...rest}
      />
      <span className={styles.radio_checkmark} />
      <Text className={styles.radio_label}>{label}</Text>
    </label>
  );
};

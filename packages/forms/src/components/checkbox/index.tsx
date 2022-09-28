import React from 'react';
import cx from 'classnames';

import { CheckboxProps } from '../../types';
import { Text } from '@obrigadosenior/core';
import styles from './Checkbox.module.scss';

export const Checkbox = ({ className = '', label, onChange, ...rest }: CheckboxProps): JSX.Element => {
  return (
    <label data-testid="checkbox" className={cx(styles.checkbox_label, className)}>
      <input
        data-testid="input"
        className={styles.checkbox_input}
        onChange={(event) => onChange && onChange(event)}
        {...rest}
        type="checkbox"
      />
      <span className={styles.checkbox_checkmark} />
      <Text className={styles.checkbox_label}>{label}</Text>
    </label>
  );
};

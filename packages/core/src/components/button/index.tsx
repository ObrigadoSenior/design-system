import React from 'react';
import cx from 'classnames';
import { ButtonProps } from '../../types';
import { Icon } from '../icon';
import { Text } from '../text';
import styles from './Button.module.scss';

export const Button = ({
  className = '',
  label,
  buttonType = 'primary',
  labelSize = 's',
  width = 'auto',
  icon,
  ...rest
}: ButtonProps): JSX.Element => {
  return (
    <button
      className={cx(styles.button, styles[buttonType], className)}
      style={{ width }}
      data-testid="button"
      {...rest}
    >
      {icon ? <Icon className={cx(styles.icon)} size={labelSize} {...icon} /> : null}
      {label && buttonType !== 'icon' ? (
        <Text tag="span" className={styles.label} size={labelSize}>
          {label}
        </Text>
      ) : null}
    </button>
  );
};

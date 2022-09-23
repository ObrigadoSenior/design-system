import React from 'react';
import cx from 'classnames';
import { ButtonProps } from '../../models';
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
      {icon ? <Icon className={styles.icon} {...icon} /> : null}
      {label ? (
        <Text tag="span" className="label" size={labelSize}>
          {label}
        </Text>
      ) : null}
    </button>
  );
};

import React from 'react';
import cx from 'classnames';
import { IconProps } from '../../types';
import styles from './Icon.module.scss';

export const Icon = ({ className, icon, size = 's', disabled = false, type = 'primary' }: IconProps): JSX.Element => {
  return (
    <span
      data-testid="icon"
      className={cx(styles.icon, styles[size], disabled ? styles.disabled : null, styles[type], className)}
    >
      {icon}
    </span>
  );
};

import cx from 'classnames';
import React from 'react';
import { TextProps } from '../../models';
import styles from './Text.module.scss';

export const Text = ({
  children,
  size = 'm',
  type = 'primary',
  weight = 'medium',
  tag = 'span',
  className = '',
  fontStyle = 'normal',
}: TextProps): JSX.Element => {
  const text = React.createElement(
    tag,
    {
      className: cx(styles.text, styles[tag], styles[size], styles[type], styles[weight], className),
      style: { fontStyle },
      'data-testid': 'text',
    },
    children,
  );
  return text;
};

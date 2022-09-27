import React from 'react';
import cx from 'classnames';
import { TerminalListProps } from '../../../types/components/list';

import styles from './List.module.scss';

export const TerminalList = ({ children, className }: TerminalListProps): JSX.Element => {
  return <li className={cx(className, styles.content_item)}>{children}</li>;
};

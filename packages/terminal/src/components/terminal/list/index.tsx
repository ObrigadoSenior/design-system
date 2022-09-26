import React from 'react';

import { TerminalListProps } from '../../../types';
import styles from './List.module.scss';

export const TerminalList = ({ children }: TerminalListProps): JSX.Element => (
  <li className={styles.content_item}>{children}</li>
);

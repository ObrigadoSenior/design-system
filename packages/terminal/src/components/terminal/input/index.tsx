import cx from 'classnames';
import React from 'react';

import { TerminalDataInputProps } from '../../../types';
import { TerminalList } from '../list';
import { TerminalText } from '../TextBlock';
import styles from './Input.module.scss';

export const Input = ({
  path,
  cmd,
  date,
  readOnly = false,
  autoFocus = true,
  cmdExists,
  ...rest
}: TerminalDataInputProps): JSX.Element => {
  return (
    <TerminalList>
      <div className={styles.path}>
        <TerminalText>{path}</TerminalText>
        <TerminalText className={cx(styles.branch, cmdExists ? styles.rainbow : null)}>online</TerminalText>
      </div>
      <input readOnly={readOnly} autoFocus={autoFocus} value={cmd} className={styles.input} {...rest} />
      <TerminalText className={cx(styles.date, cmd !== '' && !readOnly ? styles.hide : null)}>{date}</TerminalText>
    </TerminalList>
  );
};

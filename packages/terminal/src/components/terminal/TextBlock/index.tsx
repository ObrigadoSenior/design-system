import { Text as OSText } from '@obrigadosenior/core';
import cx from 'classnames';
import React from 'react';

import { TerminalContentExistingDataProps } from '../../../types';
import { TerminalTextBlockProps, TerminalTextProps } from '../../../types/components/textBlock';
import { TerminalList } from '../list';
import styles from './Text.module.scss';

const renderData = (data: TerminalContentExistingDataProps['data']): JSX.Element[] =>
  data.map((d) => {
    return (
      <TerminalList key={`${new Date().getMilliseconds()}-${d}`}>
        <TerminalText>{d}</TerminalText>
      </TerminalList>
    );
  });

export const TextBlock = ({ data }: TerminalTextBlockProps): JSX.Element => <>{renderData(data)}</>;

export const TerminalText = ({ tag = 'span', className, children }: TerminalTextProps): JSX.Element => (
  <OSText className={cx(styles.text, className)} tag={tag}>
    {children}
  </OSText>
);

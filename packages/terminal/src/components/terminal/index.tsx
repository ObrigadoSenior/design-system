import React from 'react';

import { TerminalProps } from '../../types';
import { Content } from './content';
import { TopPanel } from './top_panel';

import styles from './Terminal.module.scss';

export const Terminal = (props: TerminalProps): JSX.Element => {
  return (
    <div className={styles.terminal}>
      <TopPanel title="Obrigado Señor Developer" />
      <Content {...props} />
    </div>
  );
};

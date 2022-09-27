import { Text } from '@obrigadosenior/core';
import React from 'react';
import { TerminalTopPanelProps } from '../../../types/components/topPanel';

import styles from './TopPanel.module.scss';

type IconsProps = {
  name: string;
};

const leftIcons: IconsProps[] = [
  {
    name: 'close',
  },
  {
    name: 'minimize',
  },
  {
    name: 'maximize',
  },
];

export const TopPanel = ({ title }: TerminalTopPanelProps): JSX.Element => {
  const renderLeftIcons = leftIcons.map(({ name }) => <li key={name} className={styles[name]} />);

  return (
    <div className={styles.top_panel}>
      <ul className={styles.left_component}>{renderLeftIcons}</ul>
      <Text className={styles.header} tag="h4">
        {title}
      </Text>
      <span className={styles.command_tool} />
    </div>
  );
};

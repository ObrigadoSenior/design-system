import { Text } from '@obrigadosenior/core';
import React, { useState } from 'react';

import { TerminalContentProps } from '../../../types';
import styles from './Content.module.scss';
import { NewData } from './newData';

const renderData = (data: TerminalContentProps['initData']): JSX.Element[] =>
  data.map((d) => {
    return (
      <li key={d} className={styles.content_item}>
        <Text className={styles.text} tag="span">
          {d}
        </Text>
      </li>
    );
  });

export const Content = ({ path, initData = [] }: TerminalContentProps): JSX.Element => {
  const [data, setData] = useState<string[]>(initData);

  return (
    <ul className={styles.content}>
      {renderData(data)}
      <NewData path={path} setData={(newData) => setData([...data, newData])} />
    </ul>
  );
};

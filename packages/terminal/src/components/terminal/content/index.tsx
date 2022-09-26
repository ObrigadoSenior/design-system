import { map } from 'ramda';
import React, { useState } from 'react';

import { TerminalContentExistingDataProps, TerminalContentProps } from '../../../types';
import styles from './Content.module.scss';
import { ExistingData } from './existingData';
import { NewData } from './newData';

const getNewDate = () =>
  new Intl.DateTimeFormat('en-GB', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    weekday: 'short',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
  }).format(new Date());

export const Content = ({ path, initData = [] }: TerminalContentProps): JSX.Element => {
  const [data, setData] = useState<TerminalContentExistingDataProps[]>(initData);

  const renderData = map((data) => <ExistingData {...data} key={data.id} path={path} />, data);

  return (
    <ul className={styles.content}>
      {data.length ? renderData : null}
      <NewData path={path} date={getNewDate()} setData={(newData) => setData([...data, newData])} />
    </ul>
  );
};

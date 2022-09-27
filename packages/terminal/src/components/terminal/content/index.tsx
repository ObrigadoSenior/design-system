import { map } from 'ramda';
import React, { useState } from 'react';
import { TerminalContentExistingDataProps, TerminalContentProps } from '../../../types/components/content';
import { ExistingData } from '../data/existingData';
import { NewData } from '../data/newData';

import styles from './Content.module.scss';

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

export const Content = ({ path, data = [], cmds = [] }: TerminalContentProps): JSX.Element => {
  const [showNewData, setShowNewData] = useState<boolean>(true);

  const [allData, setAllData] = useState<TerminalContentExistingDataProps[]>(data);

  const renderData = map(
    (d) => <ExistingData {...d} key={d.id} path={path} setShowNewData={(bool) => setShowNewData(bool)} />,
    allData,
  );

  return (
    <ul className={styles.content}>
      {renderData}
      {showNewData ? (
        <NewData path={path} cmds={cmds} date={getNewDate()} setData={(newData) => setAllData([...allData, newData])} />
      ) : null}
    </ul>
  );
};

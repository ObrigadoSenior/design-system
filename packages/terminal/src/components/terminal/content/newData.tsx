import cx from 'classnames';
import React, { useState } from 'react';
import { Text } from '@obrigadosenior/core';

import styles from './NewData.module.scss';
import { TerminalContentItemProps } from '../../../types';
import { drop, split, includes, take } from 'ramda';

const getDate = new Intl.DateTimeFormat('en-GB', {
  year: 'numeric',
  month: 'short',
  day: 'numeric',
  weekday: 'short',
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric',
}).format(new Date());

const commands: string[] = ['run', 'exit'];
const commandsSuffix: string[] = ['lines', 'bad'];

export const NewData = ({ path, setData }: TerminalContentItemProps): JSX.Element => {
  const [newData, setNewData] = useState<string>('');
  const [firstLine, setFirstLine] = useState<string>('');

  const command: boolean = includes(firstLine, commands);

  const onChangeInput = (currentTarget: EventTarget & HTMLInputElement) => {
    const { value } = currentTarget;
    const splitData = split(' ', value);
    const firstSplit = take(1, splitData).toString();

    let nd = value;
    if (includes(firstSplit, commands)) {
      setFirstLine(firstSplit);
      nd = drop(1, splitData).toString();
    } else if (splitData.length === 1 && includes(firstLine, commands)) {
      nd = firstLine;
      setFirstLine('');
    }
    setNewData(nd);
  };

  const onKeyPressed = (key: string) => {
    if (key === 'Enter') {
      let nd = newData;
      if (command) {
        nd = `${firstLine} ${newData}`;
        console.log('Command should be run');
      }
      setData(nd);
      setNewData('');
      setFirstLine('');
    }
  };

  return (
    <li key="new input" className={styles.content_item}>
      <div className={styles.path}>
        <Text className={styles.text} tag="span">
          {path}
        </Text>
        <Text className={cx(styles.text, styles.branch, command ? styles.rainbow : null)} tag="span">
          online
        </Text>
      </div>
      {command ? (
        <Text tag="span" className={cx(styles.text, styles.command)}>
          {firstLine}
        </Text>
      ) : null}
      <input
        autoFocus={true}
        value={newData}
        className={styles.input}
        onChange={({ currentTarget }) => onChangeInput(currentTarget)}
        onKeyDown={({ key }) => onKeyPressed(key)}
      />
      <Text className={cx(styles.text, styles.date, newData === '' ? null : styles.hide)} tag="span">
        {getDate}
      </Text>
    </li>
  );
};

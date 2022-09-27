import { Text as OSText } from '@obrigadosenior/core';
import cx from 'classnames';
import { map } from 'ramda';
import React, { useEffect, useState } from 'react';
import { TerminalContentExistingDataProps } from '../../../types/components/content';

import { TerminalTextBlockProps, TerminalTextProps } from '../../../types/components/textBlock';
import { TerminalList } from '../list';
import { ProgressBar } from '../progressBar';
import styles from './Text.module.scss';

const renderData = (
  data: TerminalContentExistingDataProps['data'],
  setShowNewData: TerminalTextBlockProps['setShowNewData'],
): JSX.Element[] => {
  const [count, setCount] = useState<number>(0);
  const [mapData, setMapData] = useState<TerminalContentExistingDataProps['data']>([]);

  let interval: NodeJS.Timer;

  useEffect(() => {
    setShowNewData(false);
    if (count < data.length) {
      const preDataPoint = data[count - 1];
      let ms = 0;
      switch (preDataPoint?.process) {
        case 'loading':
          ms = 3000;
          break;
        case 'step':
          ms = 750;
          break;
        case 'instant':
        default:
          ms = 0;
          break;
      }
      interval = setInterval(() => {
        setMapData((arr) => [...arr, data[count]]);
        setCount(count + 1);
      }, ms);
    } else {
      setShowNewData(true);
    }

    return () => {
      clearInterval(interval);
    };
  }, [count]);

  return mapData.map(({ value, process }) => {
    const isArr = Array.isArray(value);
    let v;
    if (isArr) {
      v = map((val) => <TerminalText size="s">{val}</TerminalText>, value);
    } else {
      v = <TerminalText size="s">{value}</TerminalText>;
    }
    return (
      <TerminalList className={styles.list} key={`${process}-${value}`}>
        {v}
        {process === 'loading' ? <ProgressBar /> : null}
      </TerminalList>
    );
  });
};

export const TextBlock = ({ data, setShowNewData }: TerminalTextBlockProps): JSX.Element => (
  <>{renderData(data, setShowNewData)}</>
);

export const TerminalText = ({ tag = 'span', className, children, size = 's' }: TerminalTextProps): JSX.Element => (
  <OSText size={size} className={cx(styles.text, className)} tag={tag}>
    {children}
  </OSText>
);

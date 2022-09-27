import React from 'react';
import styles from './ProgressBar.module.scss';

export const ProgressBar = (): JSX.Element => {
  return (
    <div className={styles.meter}>
      <span className={styles.progress}></span>
    </div>
  );
};

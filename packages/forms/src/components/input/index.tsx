import { Button, Icon } from '@obrigadosenor/core';
import React, { useEffect, useState } from 'react';
import cx from 'classnames';

import { InputProps } from '../../types';
import styles from './Input.module.scss';

export const Input = ({
  title,
  icons,
  defaultValue = '',
  onChange,
  className = '',
  ...rest
}: InputProps): JSX.Element => {
  const [val, setVal] = useState(defaultValue);
  const inputRef = React.useRef<HTMLInputElement>(null);
  useEffect(() => setVal(defaultValue), [defaultValue]);

  return (
    <div
      data-testid="input-wrapper"
      className={cx(styles.container, className, rest.disabled ? styles.disabled : null)}
    >
      {icons?.start && (
        <Icon className={cx(styles.icon, styles.start)} disabled={rest.disabled} size="m" {...icons.start} />
      )}
      <input
        data-testid="input"
        name={title}
        value={val}
        className={styles.input}
        ref={inputRef}
        onChange={(event) => {
          onChange && onChange(event);
          setVal(event.currentTarget.value);
        }}
        onKeyDown={({ key }) => {
          if (key === 'Enter') rest.onClick && rest.onClick();
        }}
        {...rest}
      />
      {icons?.end && <Button className={cx(styles.icon, styles.end)} disabled={rest.disabled} {...icons.end} />}
    </div>
  );
};

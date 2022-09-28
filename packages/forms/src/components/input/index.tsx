import { Icon } from '@obrigadosenior/core';
import React, { useEffect, useState } from 'react';
import cx from 'classnames';

import { InputProps } from '../../types';
import styles from './Input.module.scss';

export const Input = ({
  title,
  icon,
  defaultValue = '',
  onChange,
  className = '',
  height = 'xl',
  ...rest
}: InputProps): JSX.Element => {
  const [val, setVal] = useState(defaultValue);
  const inputRef = React.useRef<HTMLInputElement>(null);
  const iconClass = '';
  // if (leftIcon) iconClass = 'icons-left';
  // if (rightIcon) iconClass = 'icons-right';
  // if (leftIcon && rightIcon) iconClass = 'icons-right-left';

  useEffect(() => setVal(defaultValue), [defaultValue]);

  return (
    <div
      data-testid="input-wrapper"
      style={{ height: `var(--metrics-size${height})` }}
      className={cx(styles.container, className, rest.disabled ? styles.disabled : null)}
    >
      {/* {leftIcon && <Icon className="icon-left" icon={leftIcon} size="m" disabled={rest.disabled} />} */}
      <div className={styles.wrapper}>
        <label data-testid="input-title" className={styles.input_title} htmlFor={title}>
          {title}
        </label>
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
      </div>
      {/* {rightIcon && <Icon className="icon-right" icon={rightIcon} size="m" disabled={rest.disabled} />} */}
    </div>
  );
};

import { Icon } from '@obrigadosenior/core';
import React, { useEffect, useState } from 'react';
import { IInputProps } from '../../models';
import './inputStyle.css';

export const Input = ({
  title,
  leftIcon,
  rightIcon,
  defaultValue = '',
  onChange,
  className = '',
  height = 'xl',
  ...rest
}: IInputProps): JSX.Element => {
  const [val, setVal] = useState(defaultValue);
  const inputRef = React.useRef<HTMLInputElement>(null);
  let iconClass = '';
  if (leftIcon) iconClass = 'icons-left';
  if (rightIcon) iconClass = 'icons-right';
  if (leftIcon && rightIcon) iconClass = 'icons-right-left';

  useEffect(() => setVal(defaultValue), [defaultValue]);

  return (
    <div
      data-testid="input-wrapper"
      className={`input-div input-height-${height} ${className} ${rest.disabled ? 'disabled' : ''}`}
    >
      {leftIcon && <Icon className="icon-left" icon={leftIcon} size="m" disabled={rest.disabled} />}
      <div className="input-wrapper">
        <label data-testid="input-title" className={`input-title ${iconClass}`} htmlFor={title}>
          {title}
        </label>
        <input
          data-testid="input"
          name={title}
          value={val}
          className={`input ${iconClass}`}
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
      {rightIcon && <Icon className="icon-right" icon={rightIcon} size="m" disabled={rest.disabled} />}
    </div>
  );
};

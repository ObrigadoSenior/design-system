import React, { useEffect, useState } from 'react';
import cx from 'classnames';

import { useFilterOptions } from '../../hooks/dropdown/useFilterOptions';
import { DropdownProps } from '../../types';
import { Input } from '../input';
import { DropdownOption } from './dropdownOption';
import styles from './Dropdown.module.scss';

export const Dropdown = ({
  className = '',
  onChange,
  options,
  onOptionClick,
  onToggleOpen,
  ...rest
}: DropdownProps): JSX.Element => {
  const { activeOption, filteredOptions, onSetFilteredOptions, onClickFilterOptions } = useFilterOptions({ options });
  const [open, setOpen] = useState<boolean>(false);
  const { title } = activeOption || {};

  const renderOptions = filteredOptions.map(({ ...rest }) => (
    <li key={rest.id}>
      <DropdownOption
        onOptionsClick={(option) => {
          onClickFilterOptions(option.id);
          onOptionClick(option);
        }}
        activeOption={activeOption}
        open={open}
        setOpen={() => setOpen(false)}
        {...rest}
      />
    </li>
  ));

  useEffect(() => onToggleOpen && onToggleOpen(open), [open]);

  return (
    <div
      data-testid="dropdown"
      className={cx(
        styles.dropdown_wrapper,
        className,
        open ? styles.open : styles.close,
        rest.disabled ? styles.disabled : null,
      )}
    >
      <Input
        defaultValue={title}
        onClick={() => setOpen(!open)}
        onChange={(event) => {
          onSetFilteredOptions(event.currentTarget.value);
          onChange && onChange(event);
          setOpen(true);
        }}
        {...rest}
      />
      <div data-testid="dropdown-content" className={cx(styles.dropdown_content, open ? styles.open : styles.close)}>
        <ul data-testid="dropdown-content-ul" className={styles.dropdown_inner_content}>
          {filteredOptions && renderOptions}
        </ul>
      </div>
    </div>
  );
};

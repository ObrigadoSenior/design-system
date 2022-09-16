import React, { useEffect, useState } from 'react';
import { useFilterOptions } from '../../hooks/dropdown/useFilterOptions';
import { IDropdownProps } from '../../models';
import { Input } from '../input';
import { DropdownOption } from './dropdownOption';
import './dropdownStyle.css';

export const Dropdown = ({
  className = '',
  onChange,
  options,
  onOptionClick,
  onToggleOpen,
  ...rest
}: IDropdownProps): JSX.Element => {
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
      className={`dropdown-wrapper ${className} ${open ? 'open' : 'close'} ${rest.disabled ? 'disabled' : ''}`}
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
      <div data-testid="dropdown-content" className={`dropdown-content ${open ? 'open' : 'close'}`}>
        <ul data-testid="dropdown-content-ul" className="dropdown-inner-content">
          {filteredOptions && renderOptions}
        </ul>
      </div>
    </div>
  );
};

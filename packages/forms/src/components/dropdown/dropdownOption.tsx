import React from 'react';
import { IDropdownOption, IDropdownOptionsProps } from '../../models/components/dropdown';
import { Text } from '@obrigadosenior/core';
import './dropdownStyle.css';

export const DropdownOption = ({
  onOptionsClick,
  activeOption,
  open,
  setOpen,
  ...rest
}: IDropdownOption &
  Pick<IDropdownOptionsProps, 'activeOption' | 'onOptionsClick'> & {
    open: boolean;
    setOpen: () => void;
  }): JSX.Element => {
  const { disabled, id, leftIcon, rightIcon, iconSize, title } = rest || {};
  const onPress = () => {
    onOptionsClick({ ...rest });
    setOpen();
  };
  return (
    <button
      data-testid="dropdown-content-button"
      tabIndex={open ? 0 : -1}
      disabled={disabled}
      key={id}
      onClick={() => onPress()}
      onKeyDown={({ key }) => {
        if (key === 'Enter' || key === 'Escape') onPress();
      }}
      className={`dropdown-content-button ${activeOption !== null && activeOption.id === id ? 'active' : ''}`}
    >
      <Text
        className="title"
        size="s"
        leftIcon={leftIcon ? { icon: leftIcon, size: iconSize || 'm' } : undefined}
        rightIcon={rightIcon ? { icon: rightIcon, size: iconSize || 'm' } : undefined}
      >
        {title}
      </Text>
    </button>
  );
};

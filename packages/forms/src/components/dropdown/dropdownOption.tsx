import React from 'react';
import cx from 'classnames';

import { DropdownOptionProps, DropdownOptionsProps } from '../../types/components/dropdown';
import { Text } from '@obrigado-senor/core';
import styles from './Dropdown.module.scss';

export const DropdownOption = ({
  onOptionsClick,
  activeOption,
  open,
  setOpen,
  ...rest
}: DropdownOptionProps &
  Pick<DropdownOptionsProps, 'activeOption' | 'onOptionsClick'> & {
    open: boolean;
    setOpen: () => void;
  }): JSX.Element => {
  const { disabled, id, icon, title } = rest || {};
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
      className={cx(styles.dropdown_content_button, activeOption?.id === id ? styles.active : null)}
    >
      <Text className={styles.title} size="s">
        {title}
      </Text>
    </button>
  );
};

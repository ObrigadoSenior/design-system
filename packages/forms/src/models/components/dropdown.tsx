import { IIconProps } from '@obrigadosenior/core';
import { IInputProps } from './input';

export type IDropdownOption = {
  title: string;
  value: string;
  id: string;
  data?: string;
  disabled?: boolean;
  leftIcon?: IIconProps['icon'];
  rightIcon?: IIconProps['icon'];
  iconSize?: IIconProps['size'];
};

export type IDropdownProps = IInputProps & {
  options: IDropdownOption[];
  onOptionClick: (option: IDropdownOption) => void;
  onToggleOpen?: (open: boolean) => void;
};

export type IDropdownOptionsProps = {
  options: IDropdownProps['options'];
  onOptionsClick: (option: IDropdownOption) => void;
  activeOption: IDropdownOption | null;
};

export type IUseFilterOptions = {
  options: IDropdownProps['options'];
};

import { IIconProps } from '@obrigado-senior/core';
import { size } from '../../../../../utils';

export type IInputProps = {
  title: string;
  placeholder: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClick?: () => void;
  padding?: string;
  leftIcon?: IIconProps['icon'];
  rightIcon?: IIconProps['icon'];
  height?: size;
  className?: string;
  defaultValue?: string;
  disabled?: boolean;
};

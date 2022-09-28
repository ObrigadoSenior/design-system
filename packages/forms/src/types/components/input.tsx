import { IconProps } from '@obrigadosenior/core';
import { size } from '../../../../../utils';

export type InputProps = {
  title: string;
  placeholder: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClick?: () => void;
  padding?: string;
  icon?: IconProps;
  height?: size;
  className?: string;
  defaultValue?: string;
  disabled?: boolean;
};

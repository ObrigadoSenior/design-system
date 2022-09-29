import { IconProps } from '@obrigadosenior/core';
import { size } from '../../../../../utils';

export type InputProps = {
  title: string;
  placeholder: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClick?: () => void;
  padding?: string;
  icons?: {
    start?: IconProps;
    end?: IconProps;
  };
  className?: string;
  defaultValue?: string;
  disabled?: boolean;
};

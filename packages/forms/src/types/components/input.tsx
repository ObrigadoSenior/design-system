import { ButtonProps, IconProps } from '@obrigado-senor/core';
import { size } from '../../../../../utils';

export type InputProps = {
  title: string;
  placeholder: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClick?: () => void;
  padding?: string;
  icons?: {
    start?: IconProps;
    end?: ButtonProps;
  };
  className?: string;
  defaultValue?: string;
  disabled?: boolean;
};

import { ITextProps } from '@obrigadosenior/core';

export type ITabOption = {
  title: string;
  id: string;
  disabled?: boolean;
  leftIcon?: ITextProps['leftIcon'];
  rightIcon?: ITextProps['rightIcon'];
};

export type ITabProps = {
  options: ITabOption[];
  onOptionClick: (option: ITabOption) => void;
  activeOption?: ITabOption;
  className?: string;
};

export type ITabOptionsProps = {
  options: ITabProps['options'];
  onOptionsClick: (option: ITabOption) => void;
  activeOption?: ITabOption;
};

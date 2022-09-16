import { RefObject } from 'react';
import { fontSize, size } from '../../../../../utils';
import { ITextProps } from './text';

export type IButtonProps = {
  label: string;
  onClick: () => void;
  buttonType: 'primary' | 'secondary' | 'badge' | 'icon' | 'flat';
  size?: size;
  labelSize?: fontSize;
  fullWidth?: boolean;
  leftIcon?: ITextProps['leftIcon'];
  rightIcon?: ITextProps['rightIcon'];
  innerRef?: RefObject<HTMLButtonElement>;
  disabled?: boolean;
  className?: string;
};

import { IIconProps } from './icon';
import { fontSize, fontTag, type, weight } from '../../../../../utils';

export type ITextProps = {
  children: string;
  color?: string;
  size?: fontSize;
  weight?: weight;
  type?: type;
  tag?: fontTag;
  wrap?: 'wrap' | 'nowrap';
  innerRef?: React.RefObject<HTMLSpanElement | HTMLParagraphElement | HTMLAnchorElement>;
  ref?: React.RefObject<HTMLSpanElement | HTMLParagraphElement | HTMLAnchorElement>;
  leftIcon?: IIconProps;
  rightIcon?: IIconProps;
  fontStyle?: 'italic' | 'normal';
  width?: 'auto' | 'full';
  className?: string;
  href?: string;
  onClick?: () => void;
  textClassName?: string;
};

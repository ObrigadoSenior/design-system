import { ComponentPropsWithoutRef, ReactElement } from 'react';
import { size, type } from '../../../../../utils';

export interface IconProps extends ComponentPropsWithoutRef<'span'> {
  icon: ReactElement | JSX.Element;
  type?: type;
  size?: size;
  disabled?: boolean;
  className?: string;
}

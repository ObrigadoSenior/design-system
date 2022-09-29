import { ComponentPropsWithoutRef } from 'react';
import { fontSize } from '../../../../../utils';
import { IconProps } from './icon';

interface DefaultButtonProps extends ComponentPropsWithoutRef<'button'> {
  onClick: () => void;
  width?: 'auto' | '100%';
}

interface BtnLabelProps {
  label: string;
  labelSize?: fontSize;
  icon?: IconProps;
}

interface BtnIconProps {
  label?: never;
  labelSize?: never;
  icon: IconProps;
}

type ConditionalProps =
  | (BtnLabelProps & {
      buttonType?: 'primary' | 'secondary';
    })
  | (BtnIconProps & {
      buttonType?: 'icon';
    });

export type ButtonProps = DefaultButtonProps & ConditionalProps;

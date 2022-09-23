import { IconProps } from '@obrigadosenior/core';
import { ReactElement } from 'react';

export interface ModalProps {
  children: ReactElement | JSX.Element;
  closeIcon: IconProps;
  onClickIcon: (open: boolean) => void;
  open?: boolean;
  title?: ReactElement | JSX.Element;
  className?: string;
  overlayElement?: ReactElement | JSX.Element;
}

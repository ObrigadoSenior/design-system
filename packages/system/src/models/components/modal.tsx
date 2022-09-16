import { IIconProps } from '@obrigado-senior/core';
import { ReactElement } from 'react';

export type IModalProps = {
  children: ReactElement | JSX.Element;
  closeIcon: IIconProps;
  onClick: (open: boolean) => void;
  open?: boolean;
  title?: ReactElement | JSX.Element;
  className?: string;
  overlayElement?: ReactElement | JSX.Element;
};

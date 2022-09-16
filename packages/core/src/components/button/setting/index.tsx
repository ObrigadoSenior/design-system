import React, { ReactElement } from 'react';
import { Button } from '../index';
import { IButtonProps } from '../../../models';
import { Modal, IModalProps } from '@obrigado-senior/system';

export type ISettingButton = {
  settingTitle: string;
  settingIcon: IButtonProps['leftIcon'];
  options: ReactElement | JSX.Element;
  open: boolean;
  setOpen: (open: boolean) => void;
  closeIcon: IModalProps['closeIcon'];
  className?: string;
  modalTitle?: IModalProps['title'];
};

export const SettingButton: React.FC<ISettingButton> = ({
  settingTitle,
  options,
  open,
  setOpen,
  settingIcon,
  closeIcon,
  className,
  modalTitle,
}) => {
  const modal = (
    <Modal title={modalTitle} closeIcon={closeIcon} onClick={() => setOpen(false)} open={open}>
      {options}
    </Modal>
  );
  return (
    <>
      <Button
        data-testid="setting-button"
        label={settingTitle}
        buttonType="secondary"
        size="xl"
        leftIcon={settingIcon}
        onClick={() => setOpen(!open)}
        className={className}
      />
      {modal}
    </>
  );
};

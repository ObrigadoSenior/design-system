import { Text } from '../../../../packages/core';
import { fontSize, weight } from '../../../../utils';
import React from 'react';
import { DesignSystemCopyButton, IDesignSystemCopyButton } from '../design-system-copy-button';
import './style.css';

export interface IDesignSystemListItem {
  name: string;
  description: string;
  mainBtn: IDesignSystemCopyButton;
  secondaryBtn?: IDesignSystemCopyButton;
  weight?: weight;
  size?: fontSize;
}

export const DesignSystemListItem = ({
  name,
  description,
  mainBtn,
  secondaryBtn,
  weight = 'light',
  size = 'm',
}: IDesignSystemListItem): JSX.Element => {
  return (
    <div className="design-system-list-item">
      <span className="name-description">
        <Text size={size} weight={weight}>
          {name}
        </Text>
        <Text fontStyle='italic' size='s' >{description}</Text>
      </span>

      <DesignSystemCopyButton {...mainBtn} />
      {secondaryBtn && <DesignSystemCopyButton {...secondaryBtn} />}
    </div>
  );
};

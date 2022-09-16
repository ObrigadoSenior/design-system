import React from 'react';
import './design-system-utils-style.css';
import './design-system-common-style.css';
import { Text } from '../../../packages/core';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const hexToRgba = (hex: string): string | string[] | number => {
  let c: string | string[] | number = 0;
  if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
    c = hex.substring(1).split('');
    if (c.length == 3) {
      c = [c[0], c[0], c[1], c[1], c[2], c[2]];
    }
    c = '0x' + c.join('');
    c = (c as unknown) as number;
    return 'rgba(' + [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(',') + ',1)';
  }
  return c;
};

interface ICopyToClipboard {
  value: string;
  bgColor?: string;
  textColor?: string;
}

export const copyToClipboard = ({ value, bgColor = '#000000', textColor = '#FFFFFF' }: ICopyToClipboard): void => {
  const copyObj = document.createElement('textarea');
  copyObj.value = value;
  document.body.appendChild(copyObj);
  copyObj.select();
  const message = document.createElement('span');
  message.classList.add('copy--message');
  message.style.backgroundColor = bgColor;
  message.style.color = textColor;
  try {
    message.textContent = `Copied: ${value}`;
  } catch (err) {
    message.textContent = `Something went wrong!`;
  }
  document.body.appendChild(message);
  setTimeout(() => {
    document.body.removeChild(message);
  }, 2500);
  document.body.removeChild(copyObj);
};

interface IBreak {
  title: string;
  subTitle?: string;
}

export const Break = ({ title, subTitle }: IBreak): JSX.Element => {
  return (
    <div className="break">
      <Text tag="h5" size="m">
        {title}
      </Text>
      {subTitle && <Text size="s">{subTitle}</Text>}
    </div>
  );
};

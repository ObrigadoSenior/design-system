import { AddThemeProps } from '../types';
import { setCoreTheme } from './setCoreTheme';
import { setDefaultTheme } from './setDefaultTheme';
import { setFormsTheme } from './setFormsTheme';

export function setStylePerKey<T>(name: string, data: T): void {
  for (const key in data) {
    const uppercaseSplit = key.match(/([A-Z]?[^A-Z]*)/g)?.slice(0, -1);
    const joinedKeys = uppercaseSplit?.join('-').toLowerCase();
    const value = data[key] as string;
    const k = `--${name}-${joinedKeys}`;
    setStyle(k, value);
  }
}

export const setStyle = (name: string, value: string): void => {
  const { style } = document.documentElement || {};
  style.setProperty(name, value);
};

export const AddTheme = ({ theme }: AddThemeProps): void => {
  const canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

  if (canUseDOM) {
    const { core, forms, ...rest } = theme || {};

    core && setCoreTheme({ data: core });
    forms && setFormsTheme({ data: forms });
    rest && setDefaultTheme({ data: rest });
  }
};

import { AddThemeProps } from '../types';
import { setCalendarTheme } from './setCalendarTheme';
import { setCoreTheme } from './setCoreTheme';
import { setDefaultTheme } from './setDefaultTheme';
import { setFormsTheme } from './setFormsTheme';
import { setTerminalTheme } from './setTerminalTheme';

const splitUpper = (s: string) => s.match(/([A-Z]?[^A-Z]*)/g)?.slice(0, -1);
const joinString = (s: string[] = []) => s.join('-').toLowerCase();

export function setStylePerKey<T>(name: string, data: T): void {
  for (const key in data) {
    const joinedKeys = joinString(splitUpper(key));
    const value = data[key] as string;
    const splitName = joinString(splitUpper(name));
    const k = `--${splitName}-${joinedKeys}`;
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
    const { core, forms, terminal, calendar, ...rest } = theme || {};

    core && setCoreTheme({ data: core });
    forms && setFormsTheme({ data: forms });
    rest && setDefaultTheme({ data: rest });
    terminal && setTerminalTheme({ data: terminal });
    calendar && setCalendarTheme({ data: calendar });
  }
};

export * from './palettes';
export * from './themes';

import { ThemeCoreProps } from './core';
import { ThemeFormsProps } from './forms';
import { ThemeDefaultProps } from './default';
import { ThemeTerminalProps } from './terminal';
import { ThemeCalendarProps } from './calendar';

export interface SetThemeProps<T> {
  data: T;
}

export type ThemeProps = ThemeDefaultProps & {
  core?: ThemeCoreProps;
  forms?: ThemeFormsProps;
  terminal?: ThemeTerminalProps;
  calendar?: ThemeCalendarProps;
};

export type AddThemeProps = {
  theme: ThemeProps;
};

export * from './default';
export * from './forms';
export * from './core';
export * from './terminal';
export * from './calendar';

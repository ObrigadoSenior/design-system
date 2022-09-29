import { ThemeCoreProps } from './core';
import { ThemeFormsProps } from './forms';
import { ThemeDefaultProps } from './default';
import { ThemeTerminalProps } from './terminal';

export interface SetThemeProps<T> {
  data: T;
}

export type ThemeProps = ThemeDefaultProps & {
  core?: ThemeCoreProps;
  forms?: ThemeFormsProps;
  terminal?: ThemeTerminalProps;
};

export type AddThemeProps = {
  theme: ThemeProps;
};

export * from './default';
export * from './forms';
export * from './core';
export * from './terminal';

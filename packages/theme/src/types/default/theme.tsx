import { ThemeCoreProps } from '../core';
import { ThemeFormsProps } from '../forms';
import { ThemeDefaultProps } from './default';

export interface SetThemeProps<T> {
  data: T;
}

export type ThemeProps = ThemeDefaultProps & {
  core?: ThemeCoreProps;
  forms: ThemeFormsProps;
};

export type AddThemeProps = {
  theme: ThemeProps;
};

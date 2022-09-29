import { ThemeDefaultProps, ThemeProps } from '../../types';
import { defaultCoreTheme } from './defaultCoreTheme';
import { defaultFormsTheme } from './defaultFormsTheme';
import { defaultTerminalTheme } from './defaultTerminalTheme';

export const defaultTheme = (props: Required<ThemeDefaultProps>): ThemeProps => ({
  colors: props.colors,
  sizes: props.sizes,
  core: defaultCoreTheme(props),
  forms: defaultFormsTheme(props),
  terminal: defaultTerminalTheme(props),
});

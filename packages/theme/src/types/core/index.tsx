import { ThemeButtonProps } from './button';
import { ThemeIconProps } from './icon';
import { ThemeTextProps } from './text';

export type ThemeCoreProps = {
  button?: {
    primary?: ThemeButtonProps;
    secondary?: ThemeButtonProps;
    icon?: ThemeButtonProps;
  };
  text?: ThemeTextProps;
  icon?: ThemeIconProps;
};

export * from './button';
export * from './icon';
export * from './text';

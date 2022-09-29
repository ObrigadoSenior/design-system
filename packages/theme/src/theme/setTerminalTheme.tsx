import { setStylePerKey } from '.';
import { SetThemeProps } from '../types';
import {
  ThemeTerminalBaseProps,
  ThemeTerminalInputProps,
  ThemeTerminalProgressBarProps,
  ThemeTerminalProps,
  ThemeTerminalTextBlockProps,
  ThemeTerminalTopProps,
} from '../types/terminal';

export const setTerminalTheme = ({ data }: SetThemeProps<ThemeTerminalProps>): void => {
  const { base, top, textBlock, progressBar, input } = data || {};

  base && setStylePerKey<ThemeTerminalBaseProps>('terminal', base);
  top && setStylePerKey<ThemeTerminalTopProps>('terminal-top', top);
  textBlock && setStylePerKey<ThemeTerminalTextBlockProps>('terminal-text-block', textBlock);
  progressBar && setStylePerKey<ThemeTerminalProgressBarProps>('terminal-progress-bar', progressBar);
  input && setStylePerKey<ThemeTerminalInputProps>('terminal-input', input);
};

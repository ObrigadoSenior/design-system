import { ComponentPropsWithoutRef } from 'react';
import { TerminalTextBlockProps } from './textBlock';

export type data = string;

export type TerminalProps = {
  path: string;
  initData: TerminalContentExistingDataProps[];
};

export type TerminalTopPanelProps = {
  title: string;
};

export type TerminalContentProps = Pick<TerminalProps, 'initData' | 'path'>;

export type TerminalContentItemProps = Pick<TerminalProps, 'path'> &
  Pick<TerminalContentExistingDataProps, 'date'> & {
    setData: (data: TerminalContentExistingDataProps) => void;
  };

export type TerminalContentExistingDataProps = TerminalTextBlockProps & {
  cmd: data;
  date: string;
  id: string;
};

export type TerminalDataInputProps = Pick<TerminalProps, 'path'> &
  Pick<TerminalContentExistingDataProps, 'cmd' | 'date'> &
  ComponentPropsWithoutRef<'input'> & {
    cmdExists?: boolean;
  };

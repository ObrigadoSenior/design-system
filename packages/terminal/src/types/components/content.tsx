import { TerminalProps } from './terminal';
import { TerminalTextBlockProps } from './textBlock';

export type data = string;

export type TerminalContentExistingDataProps = Pick<TerminalTextBlockProps, 'data'> & {
  cmd: data;
  date: string;
  id: string;
};

export type TerminalContentProps = TerminalProps;

export type TerminalContentItemProps = Pick<TerminalProps, 'path' | 'cmds'> &
  Pick<TerminalContentExistingDataProps, 'date'> & {
    setData: (data: TerminalContentExistingDataProps) => void;
  };

import { TerminalProps } from './terminal';
import { TerminalTextBlockProps } from './textBlock';

export type data = string;

export type TerminalContentExistingDataProps = TerminalTextBlockProps & {
  cmd: data;
  date: string;
  id: string;
};

export type TerminalContentProps = Pick<TerminalProps, 'data' | 'path'>;

export type TerminalContentItemProps = Pick<TerminalProps, 'path'> &
  Pick<TerminalContentExistingDataProps, 'date'> & {
    setData: (data: TerminalContentExistingDataProps) => void;
  };

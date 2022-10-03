import { TextProps } from '@obrigadosenor/core';
import { CmdDataProps } from './terminal';

export type TerminalTextBlockProps = {
  data: CmdDataProps[];
  setShowNewData: (bool: boolean) => void;
};

export type TerminalTextProps = TextProps;

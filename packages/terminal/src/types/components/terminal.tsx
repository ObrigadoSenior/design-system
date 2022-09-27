import { TerminalContentExistingDataProps } from './content';

export type CmdProcessProps = 'loading' | 'instant' | 'step';

export type CmdProps = CmdsProps<string | null, string | null>;

export type TerminalProps = {
  path: string;
  data: TerminalContentExistingDataProps[];
  cmds: CmdProps[];
};

export interface CmdDataProps {
  value: string | string[];
  process: CmdProcessProps;
}

export interface CmdsProps<T, V> {
  cmd: T;
  suffix: V;
  data: CmdDataProps[];
}

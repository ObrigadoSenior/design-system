import { ComponentPropsWithoutRef } from 'react';
import { TerminalContentExistingDataProps } from './content';
import { TerminalProps } from './terminal';

export type TerminalDataInputProps = Pick<TerminalProps, 'path'> &
  Pick<TerminalContentExistingDataProps, 'cmd' | 'date'> &
  ComponentPropsWithoutRef<'input'> & {
    cmdExists?: boolean;
  };

import React, { useState } from 'react';

import { find, split, whereEq } from 'ramda';
import { TerminalContentExistingDataProps, TerminalContentItemProps } from '../../../types';
import { Input } from '../input';

type CmdProps = 'run' | 'exit' | null;
type CmdSuffixProps = '-v' | '-h' | null;

interface CmdsProps {
  cmd: CmdProps;
  suffix: CmdSuffixProps;
  data: string[];
}

const cmds: CmdsProps[] = [
  {
    cmd: 'run',
    suffix: '-h',
    data: ['Need help?', "I'm having trouble as well", 'Plz, help!'],
  },
];

export const NewData = ({ path, setData, date }: TerminalContentItemProps): JSX.Element => {
  const [newData, setNewData] = useState<string[]>([]);

  const [runCmd, setRunCmd] = useState<Pick<CmdsProps, 'cmd' | 'suffix'>>({
    cmd: null,
    suffix: null,
  });

  const getCommandData = () => {
    const pred = whereEq(runCmd);
    const { data } = find((data) => pred(data), cmds) || {};
    return data;
  };

  const correctCmd = () => getCommandData() !== undefined;

  const onChangeInput = (currentTarget: EventTarget & HTMLInputElement) => {
    const { value } = currentTarget;
    const sd = split(' ', value);
    setNewData(sd);
    if (sd.length <= 1) {
      setRunCmd({ ...runCmd, cmd: sd[0] as CmdProps });
    } else if (sd.length >= 2) {
      setRunCmd({ ...runCmd, suffix: sd[1] as CmdSuffixProps });
    }
  };

  const onKeyPressed = (key: string) => {
    if (key === 'Enter') {
      let data: TerminalContentExistingDataProps['data'] = [`${newData.join(' ')}: This looks weird!`];
      if (correctCmd()) {
        data = getCommandData() as string[];
        console.log('Command should be run', data);
      }
      setData({
        cmd: newData.join(' '),
        data,
        date,
        id: new Date().getMilliseconds().toString() + date,
      });
      setNewData([]);
      setRunCmd({ cmd: null, suffix: null });
    }
  };

  return (
    <Input
      path={path}
      date={date}
      cmd={newData.join(' ')}
      autoFocus={true}
      onChange={({ currentTarget }) => onChangeInput(currentTarget)}
      onKeyDown={({ key }) => onKeyPressed(key)}
      cmdExists={correctCmd()}
    />
  );
};

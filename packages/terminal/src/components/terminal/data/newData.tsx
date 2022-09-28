import React, { useState } from 'react';

import { find, isEmpty, isNil, split, whereEq } from 'ramda';
import { CmdProps } from '../../../types';
import { TerminalContentItemProps } from '../../../types/components/content';
import { Input } from '../input';

export const NewData = ({ path, setData, date, cmds = [] }: TerminalContentItemProps): JSX.Element => {
  const [newData, setNewData] = useState<string[]>([]);

  const [runCmd, setRunCmd] = useState<Pick<CmdProps, 'cmd' | 'suffix'>>({
    cmd: null,
    suffix: null,
  });

  const getCommandData = () => {
    const pred = whereEq(runCmd);
    let { data } = find((data) => pred(data), cmds) || {};
    const correctCmd = data !== undefined;
    if (data === undefined) {
      data = [
        {
          value: `${newData.join(' ')}: This looks weird!`,
          process: 'instant',
        },
      ];
    }
    return { data, correctCmd };
  };

  const { correctCmd } = getCommandData();

  const onChangeInput = (currentTarget: EventTarget & HTMLInputElement) => {
    const { value } = currentTarget;
    const sd = split(' ', value);
    setNewData(sd);
    if (sd.length <= 1) {
      setRunCmd({ ...runCmd, cmd: sd[0] });
    } else if (sd.length >= 2) {
      setRunCmd({ ...runCmd, suffix: sd[1] });
    }
  };

  const onKeyPressed = (key: string) => {
    if (key === 'Enter') {
      setData({
        cmd: newData.join(' '),
        data: getCommandData().data,
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
      cmdExists={correctCmd}
    />
  );
};

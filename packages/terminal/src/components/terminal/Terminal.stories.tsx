import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Terminal as Trml } from '.';
import { CmdsProps } from '../../types';
import { values } from 'ramda';

export default {
  title: 'Terminal',
  component: Trml,
} as ComponentMeta<typeof Trml>;

const Template: ComponentStory<typeof Trml> = (args) => {
  const { host, pathname } = window.location || {};
  const path = `${host}${pathname}`;
  return <Trml {...args} path={path} />;
};

type CmdProps = 'run' | 'exit';
type CmdSuffixProps = '-v' | '-h' | 'whoami';

const cmd: { [key in CmdProps]: CmdProps } = {
  run: 'run',
  exit: 'exit',
};

const suffix: { [key in CmdSuffixProps]: CmdSuffixProps } = {
  '-v': '-v',
  '-h': '-h',
  whoami: 'whoami',
};

const cmds: CmdsProps<CmdProps, CmdSuffixProps>[] = [
  {
    cmd: cmd.run,
    suffix: suffix['-h'],
    data: [
      {
        value: 'Need help?',
        process: 'instant',
      },
      {
        value: ['These are the commands you can run:', `${values(cmd).join(' | ')}`],
        process: 'step',
      },
      {
        value: ['These are the suffixes', `${values(suffix).join(' | ')}`],
        process: 'step',
      },
      {
        value: ['For example', `run whoami`],
        process: 'instant',
      },
    ],
  },
  {
    cmd: cmd.run,
    suffix: suffix.whoami,
    data: [
      {
        value: 'Un momento...',
        process: 'instant',
      },
      {
        value: 'Fetching some very personal details about myself',
        process: 'loading',
      },
      {
        value: 'And this is me!',
        process: 'step',
      },
    ],
  },
];

export const Default = Template.bind({});
Default.args = {
  cmds,
};

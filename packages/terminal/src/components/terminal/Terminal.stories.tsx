import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Terminal as Trml } from '.';

export default {
  title: 'Terminal',
  component: Trml,
} as ComponentMeta<typeof Trml>;

const Template: ComponentStory<typeof Trml> = (args) => {
  const { host, pathname } = window.location || {};
  const path = `${host}${pathname}`;
  return <Trml {...args} path={path} />;
};

export const Default = Template.bind({});
Default.args = {};

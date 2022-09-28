import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Content as Cnt } from '.';

export default {
  title: 'Terminal',
  component: Cnt,
} as ComponentMeta<typeof Cnt>;

const Template: ComponentStory<typeof Cnt> = (args) => {
  const { host, pathname } = window.location || {};
  const path = `${host}${pathname}`;
  return <Cnt {...args} path={path} data={[]} />;
};

export const Content = Template.bind({});
Content.args = {};

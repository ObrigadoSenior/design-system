import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Content as Cnt } from '.';

export default {
  title: 'Terminal',
  component: Cnt,
} as ComponentMeta<typeof Cnt>;

const initData: string[] = ['one', 'two', 'three', ' four'];

const Template: ComponentStory<typeof Cnt> = (args) => {
  const { host, pathname } = window.location || {};
  const path = `${host}${pathname}`;
  return <Cnt {...args} path={path} initData={initData} />;
};

export const Content = Template.bind({});
Content.args = {};

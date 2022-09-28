import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Input as Inp } from '.';

export default {
  title: 'Terminal',
  component: Inp,
} as ComponentMeta<typeof Inp>;

const Template: ComponentStory<typeof Inp> = (args) => {
  const { host, pathname } = window.location || {};
  const path = `${host}${pathname}`;
  return <Inp {...args} path={path} />;
};

export const Input = Template.bind({});
Input.args = {};

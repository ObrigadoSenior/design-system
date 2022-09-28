import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Input as Inp } from '.';

export default {
  title: 'Forms',
  component: Inp,
} as ComponentMeta<typeof Inp>;

const Template: ComponentStory<typeof Inp> = (args) => <Inp {...args} />;

export const Input = Template.bind({});
Input.args = {};

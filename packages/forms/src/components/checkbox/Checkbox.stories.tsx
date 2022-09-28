import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Checkbox as Chk } from '.';

export default {
  title: 'Forms',
  component: Chk,
} as ComponentMeta<typeof Chk>;

const Template: ComponentStory<typeof Chk> = (args) => <Chk {...args} />;

export const Checkbox = Template.bind({});
Checkbox.args = {
  label: 'Checkbox',
};

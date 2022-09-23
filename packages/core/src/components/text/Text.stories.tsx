import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Text as Txt } from './';

export default {
  title: 'Core',
  component: Txt,
} as ComponentMeta<typeof Txt>;

const Template: ComponentStory<typeof Txt> = (args) => <Txt {...args} />;

export const Text = Template.bind({});
Text.args = {
  type: 'primary',
  size: 'l',
  tag: 'h5',
  children: 'Text',
};

import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { MonthPicker as MP } from '.';

export default {
  title: 'Calendar',
  component: MP,
} as ComponentMeta<typeof MP>;

const Template: ComponentStory<typeof MP> = (args) => <MP {...args} />;

export const MonthPicker = Template.bind({});
MonthPicker.args = {};

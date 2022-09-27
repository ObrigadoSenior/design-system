import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ProgressBar as PB } from '.';

export default {
  title: 'Terminal',
  component: PB,
} as ComponentMeta<typeof PB>;

const Template: ComponentStory<typeof PB> = () => {
  return <PB />;
};

export const ProgressBar = Template.bind({});
ProgressBar.args = {};

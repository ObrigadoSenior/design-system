import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Dropdown as Drd } from '.';

export default {
  title: 'Forms',
  component: Drd,
} as ComponentMeta<typeof Drd>;

const Template: ComponentStory<typeof Drd> = (args) => <Drd {...args} />;

export const Dropdown = Template.bind({});
Dropdown.args = {
  options: [
    {
      title: 'One',
      value: 'one',
      id: 'one',
    },
    {
      title: 'Two',
      value: 'two',
      id: 'two',
    },
    {
      title: 'Three',
      value: 'three',
      id: 'three',
    },
  ],
};

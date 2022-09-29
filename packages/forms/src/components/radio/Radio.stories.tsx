import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Radio as Rdo } from '.';

export default {
  title: 'Forms',
  component: Rdo,
} as ComponentMeta<typeof Rdo>;

const Template: ComponentStory<typeof Rdo> = (args) => <Rdo {...args} />;

export const Radio = Template.bind({});
Radio.args = {
  label: 'Radio',
};

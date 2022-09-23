import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from '.';

export default {
  title: 'Core/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  buttonType: 'primary',
  label: 'Default Button',
};

export const Primary = Template.bind({});
Primary.args = {
  buttonType: 'primary',
  label: 'Primary button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  buttonType: 'secondary',
  label: 'Secondary button',
};

export const Flat = Template.bind({});
Flat.args = {
  buttonType: 'flat',
  label: 'Secondary button',
};

export const Icon = Template.bind({});
Icon.args = {
  buttonType: 'icon',
  icon: { icon: <>🤡</> },
};

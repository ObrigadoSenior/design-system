import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from '.';

const icon = (
  <svg viewBox="0 0 20 20">
    <path d="M17.218,2.268L2.477,8.388C2.13,8.535,2.164,9.05,2.542,9.134L9.33,10.67l1.535,6.787c0.083,0.377,0.602,0.415,0.745,0.065l6.123-14.74C17.866,2.46,17.539,2.134,17.218,2.268 M3.92,8.641l11.772-4.89L9.535,9.909L3.92,8.641z M11.358,16.078l-1.268-5.613l6.157-6.157L11.358,16.078z"></path>
  </svg>
);

export default {
  title: 'Core/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  buttonType: 'primary',
  label: 'Default Button',
  icon: { icon },
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

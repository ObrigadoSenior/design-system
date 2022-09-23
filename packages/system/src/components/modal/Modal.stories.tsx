import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Modal as Mdl } from '.';
import { Button, Text } from '@obrigadosenior/core';

const icon = (
  <svg viewBox="0 0 20 20">
    <path d="M17.218,2.268L2.477,8.388C2.13,8.535,2.164,9.05,2.542,9.134L9.33,10.67l1.535,6.787c0.083,0.377,0.602,0.415,0.745,0.065l6.123-14.74C17.866,2.46,17.539,2.134,17.218,2.268 M3.92,8.641l11.772-4.89L9.535,9.909L3.92,8.641z M11.358,16.078l-1.268-5.613l6.157-6.157L11.358,16.078z"></path>
  </svg>
);

export default {
  title: 'System',
  component: Mdl,
} as ComponentMeta<typeof Mdl>;

const Template: ComponentStory<typeof Mdl> = (args) => {
  const [open, setOpen] = useState(true);
  return (
    <div>
      <Button style={{ position: 'absolute' }} label="Open modal" icon={{ icon }} onClick={() => setOpen(!open)} />
      <Mdl {...args} open={open} onClickIcon={() => setOpen(!open)} />
    </div>
  );
};

export const Modal = Template.bind({});
Modal.args = {
  title: <Text tag="h3">Modal window</Text>,
  children: <>A lot of content</>,
  closeIcon: { icon, size: 's' },
};

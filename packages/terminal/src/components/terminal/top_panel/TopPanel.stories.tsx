import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { TopPanel as TP } from '.';

export default {
  title: 'Terminal',
  component: TP,
} as ComponentMeta<typeof TP>;

const Template: ComponentStory<typeof TP> = () => {
  return <TP title="Obrigado Señor Developer" />;
};

export const TopPanel = Template.bind({});
TopPanel.args = {};

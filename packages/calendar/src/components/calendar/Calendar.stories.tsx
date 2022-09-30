import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';

import dayjs from 'dayjs';
import { Calendar as Cal } from '.';
import { useCalendarDates } from './hooks/useCalendarDates';

export default {
  title: 'Calendar',
  component: Cal,
} as ComponentMeta<typeof Cal>;

const Template: ComponentStory<typeof Cal> = (args) => {
  const props = useCalendarDates({ dates: { month: dayjs() } });

  return <Cal {...args} {...props} />;
};

export const Calendar = Template.bind({});
Calendar.args = {};

import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Calendar as Cal } from '.';
import dayjs from 'dayjs';
import { CalendarProps } from '../../types';

export default {
  title: 'Forms/Calendar',
  component: Cal,
} as ComponentMeta<typeof Cal>;

const Template: ComponentStory<typeof Cal> = (args) => {
  const [dates, setDates] = useState<CalendarProps['dates']>({
    month: dayjs(),
  });

  return (
    <Cal
      {...args}
      onClickCalendarDay={(d) => {
        if (dates.start && dates.end) {
          setDates({ ...dates, start: d, end: undefined });
        } else if (
          dates.start === undefined ||
          (d.isBefore(dates.end) && d.isBefore(dates.start)) ||
          d.isSame(dates.end)
        ) {
          setDates({ ...dates, start: d });
        } else {
          setDates({ ...dates, end: d });
        }
      }}
      onClickNextCalendarButton={(d) => setDates({ ...dates, month: d })}
      onClickPrevCalendarButton={(d) => setDates({ ...dates, month: d })}
      dates={dates}
    />
  );
};

export const Calendar = Template.bind({});
Calendar.args = {};

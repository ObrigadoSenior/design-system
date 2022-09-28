import { DecoratorFn } from '@storybook/react';
import addons from '@storybook/addons';

import React, { useEffect, useState } from 'react';
import { DARK_MODE_EVENT_NAME } from 'storybook-dark-mode';
const channel = addons.getChannel();

import { SetTheme } from './theme';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

const withTheme: DecoratorFn = (StoryFn, { globals }) => {
  const [isDark, setDark] = useState(false);

  useEffect(() => {
    // listen to DARK_MODE event
    channel.on(DARK_MODE_EVENT_NAME, setDark);
    return () => channel.off(DARK_MODE_EVENT_NAME, setDark);
  }, [channel, setDark]);
  SetTheme(isDark ? 'dark' : 'light');
  return <StoryFn />;
};

export const decorators = [withTheme];

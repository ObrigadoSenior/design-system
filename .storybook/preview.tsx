import React from 'react';
import { DecoratorFn } from '@storybook/react';
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

const withTheme: DecoratorFn = (StoryFn) => {
  SetTheme();
  return <StoryFn />;
};

// export all decorators that should be globally applied in an array
export const decorators = [withTheme];

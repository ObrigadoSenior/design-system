import { setStoriesTheme } from './storiesTheme/addStoriesTheme';
import { AddTheme, metrics, calendarTheme, coreTheme, formsTheme, systemTheme, selectTheme } from '../packages';
AddTheme({ theme: { metrics, ...calendarTheme, ...coreTheme, ...formsTheme, ...systemTheme, ...selectTheme } });
setStoriesTheme();

import { themes } from '@storybook/theming';

// or global addParameters
export const parameters = {
  docs: {
    theme: themes.light,
  },
};

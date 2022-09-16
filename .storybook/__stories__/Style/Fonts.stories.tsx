import { storiesOf } from '@storybook/react';
import React from 'react';
import { storiesFontSizes } from '../../storiesTheme/storiesFontSizes';
import { storiesFontWeights } from '../../storiesTheme/storiesFontWeights';

import { StoriesHeader } from '../design-system-components/design-system-header';
import { StoriesSection } from '../design-system-components/design-system-section';
import { StoriesSizeList } from '../design-system-components/design-system-size-list';
import { StoriesWrapper } from '../design-system-components/design-system-wrapper';

storiesOf('Design system/Style', module).add('Fonts', () => {
  return (
    <StoriesWrapper>
      <StoriesHeader preHeader="Fonts" header="The fonts we love" />
      <StoriesSection header="About font sizes">
        Used with caution to not break the the overall design. Small font sizes are to be used in paragraph and links
        whilst the larger font sizes are to be used on headers.
      </StoriesSection>
      <StoriesSizeList header="Our font sizes" type="fontSize" list={storiesFontSizes()} />
      <StoriesSection header="Intro">
        Font wheights are like font sizes: use with caution and think twice before applying them.
      </StoriesSection>
      <StoriesSizeList header="The font weights to use" type="fontWeight" list={storiesFontWeights()} />
    </StoriesWrapper>
  );
});

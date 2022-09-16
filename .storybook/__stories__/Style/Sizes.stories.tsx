import { storiesOf } from '@storybook/react';
import React from 'react';
import { storiesSizes } from '../../storiesTheme/storiesSizes';
import { storiesBorderRadius } from '../../storiesTheme/storiesBorderRadius';

import { StoriesHeader } from '../design-system-components/design-system-header';
import { StoriesSection } from '../design-system-components/design-system-section';
import { StoriesSizeList } from '../design-system-components/design-system-size-list';
import { StoriesWrapper } from '../design-system-components/design-system-wrapper';

storiesOf('Design system/Style', module).add('Metrics', () => {
  return (
    <StoriesWrapper>
      <StoriesHeader preHeader="Metrics" header="Sizes" />
      <StoriesSection header="About our sizes">
        A varitation of sizes used to set height and width on elements.
        Same sizes are also used to apply border radius as well as margins and paddings.
        <br/><br/>
        Sizes are not based on pre-defined incrementaions.
        Instead it's based on a strong and deep belief that our art director did a correct and fundamentaly polished job when coming up with these sizes.
        <br/><br/>
        If this is not the case - that our art director mislead us? - and a size need to change. Then we can take a cup of coffee and have a lenghty discussison about it!
        <br/><br/>
        <span>However, we will not add any more sizes <sup>©</sup>!</span>
        <br/>
        <sub>© Sentence patent pending</sub>
      </StoriesSection>
      <StoriesSizeList header="Our sizes" type='size' list={storiesSizes()} />
      <StoriesSizeList header="When used as border radius" type='borderRadius' list={storiesBorderRadius()} />
    </StoriesWrapper>
  );
});

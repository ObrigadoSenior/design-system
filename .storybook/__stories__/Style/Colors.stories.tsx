import { storiesOf } from '@storybook/react';
import React from 'react';
import { storiesColors } from '../../storiesTheme/storiesColors';
import { StoriesColorList } from '../design-system-components/design-system-color-list';
import { StoriesHeader } from '../design-system-components/design-system-header';
import { StoriesSection } from '../design-system-components/design-system-section';
import { StoriesWrapper } from '../design-system-components/design-system-wrapper';

storiesOf('Design system/Style', module).add('Colors', () => {
  return (
    <StoriesWrapper>
      <StoriesHeader preHeader="Style" header="Colors" />
      <StoriesSection header="Intro">Colour and how it is used play a big part in establishing a brand. It creates immediate visual recognition, clarifies our communication and helps set us apart from our competitors. It also conveys feelings, which is why it’s so important that the chosen colours match our brand identity. They need to mirror our heritage as well as our reliable, caring and welcoming culture.</StoriesSection>
      <StoriesColorList header="Our colors" list={storiesColors()} />
    </StoriesWrapper>
  );
});

import { storiesOf } from '@storybook/react';
import React from 'react';
import { StoriesHeader } from '../design-system-components/design-system-header';
import { StoriesSection } from '../design-system-components/design-system-section';
import { StoriesWrapper } from '../design-system-components/design-system-wrapper';

storiesOf('Design system/Products in use', module).add('Our products', () => {
  return (
    <StoriesWrapper>
      <StoriesHeader preHeader="Overview" header="Products in use" text='A smorgasbord of products using STDS(?)' />
      <StoriesSection header="Empty">
        As of today no project is using STDS(?). So this text is for no one, but I continue anyways!
      </StoriesSection>
      <StoriesHeader preHeader="Overview" header="Future products in use" text='A smorgasbord of products WHO WILL BE using STDS(?)' />
      <StoriesSection header="Stenaline travel web page">
        The grand old stenaline travel web page will set sail for new harbours, investigate in the possiblity to shave of its long beard, swap the wooden leg to a AI-controled one and reshape the future of ferry bookings. To be continued in the nearest future... 
          <div style={{ display: 'flex', justifyContent: 'space-around', padding: '20px 0' }}>
            <img  style={{ width: "40%" }} src={require('./img/travel.png')}  />
            <img  style={{ width: "40%" }} src={require('./img/attraction.png')}  />
          </div>
      </StoriesSection>
    </StoriesWrapper>
  );
});

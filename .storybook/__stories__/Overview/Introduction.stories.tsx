import { storiesOf } from '@storybook/react';
import React from 'react';
import { StoriesHeader } from '../design-system-components/design-system-header';
import { StoriesSection } from '../design-system-components/design-system-section';
import { StoriesWrapper } from '../design-system-components/design-system-wrapper';

storiesOf('Design system/Overview', module).add('Introduction', () => {
  return (
    <StoriesWrapper>
      <StoriesHeader
        preHeader="Overview"
        header="Stenaline travel design system - STDS(?)"
        text="Stenaline travel design system is a design system built, maintained and used by Stenaline travel."
      />
      <StoriesSection header="The historical point of view">
        <strong>
          <i>One system to rule them all!</i>
        </strong>
        <br />
        Stenaline travel has in the past used a variety of different tools and designs in all of their projects. This
        had to be stopped to enhance the customer journey as well as creating a "one company approach". This was the
        fundamentals to create a design system that hopefully will be used in most, if not all, new Stenaline travel
        projects.
      </StoriesSection>
      <StoriesSection header="Goals">
        The goals of the design system:
        <ul>
          <li>Create a consistent user experience across different travel products and the customer journey</li>
          <li>Create reusable components to make it easier to maintain our products</li>
          <li>Create a single source of truth - one place to find the latest design</li>
        </ul>
      </StoriesSection>
      <StoriesSection header="No original design flow - the code is the master">
        The idee of this design system is to be as fluent and easily maintained as possible. Instead of having to rely
        on sketch files, figma mockups, high-res designs - which eventually needs to be updated for each and every new
        feature added to the design system - the code of this project is the master.
        <br />
        <br />
        By having the code of this project as the master (i.e final design) it will - hopefully - result in less hazzle
        when design and code don't match, a decrease in tacit knowledge, one stop update for stakeholders and a closer
        collaboration between team members.
        <br />
        <br />
        What you see is what you get. If the design is not up to Stenaline standard create a ticket and hopefully it
        will be solved. We work as one to maintain this project.
      </StoriesSection>
      <StoriesSection header="Design tools in use">
        However, there are still some design tools in use:
        <ul>
          <li>Figma - the go to place to try out new idees.</li>
          <li>Sketch - some old files still in use.</li>
        </ul>
      </StoriesSection>
      <StoriesSection header="Good to know">
        Use well with the intent of creating something important for our users! <br />
        <br />
        <strong>
          <i>If something is broken - fix it!</i>
        </strong>
      </StoriesSection>
    </StoriesWrapper>
  );
});

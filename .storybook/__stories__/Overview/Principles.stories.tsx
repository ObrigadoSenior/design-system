import { storiesOf } from '@storybook/react';
import React from 'react';
import { StoriesHeader } from '../design-system-components/design-system-header';
import { StoriesSection } from '../design-system-components/design-system-section';
import { StoriesWrapper } from '../design-system-components/design-system-wrapper';

storiesOf('Design system/Overview', module).add('Principles', () => {
  return (
    <StoriesWrapper>
      <StoriesHeader preHeader="Overview" header="Principles" />
      <StoriesSection header="Reliable">
        <ul>
          <li>
            Put the users’ needs first. Be transparent and show the information the user expects and needs in order to
            make an informed decision.
          </li>
          <li>Eliminate dark patterns.</li>
          <li>Let the user feel in control by avoiding unexpected elements.</li>
          <li>
            Make sure that the solution is secure and follow good ethics. You should be able to ethically stand behind
            your design.
          </li>
        </ul>
      </StoriesSection>
      <StoriesSection header="Caring and welcoming">
        We are inclusive and show our customers empathy
        <ul>
          <li>Make the design accessible for everyone.</li>
          <li>
            Understand where in the journey the customer is and bring emotion, empathy, recognition, empowerment
            tailored for the moment.
          </li>
        </ul>
      </StoriesSection>
      <StoriesSection header="Clear">
        <ul>
          <li>Highlight what’s important.</li>
          <li>Strive for simplicity and ease of use.</li>
          <li>Provide immediate and clear feedback.</li>
        </ul>
      </StoriesSection>
      <StoriesSection header="Less is more">
        The approach of the design system is "less is more" and we strive to keep it that way. When adding new features
        one must ask oneself:
        <ul>
          <li>
            <i>Is this feature solvning a problem that our user experience?</i>
          </li>
          <li>
            <i>Are more projects in need of this feature?</i>
          </li>
          <li>
            <i>Am I only implementing this new shiny feature for bragging purpose?</i>
          </li>
        </ul>
        Investigate if there is already features in the design system that can be used in place of adding a similar one.
      </StoriesSection>
      <StoriesSection header="Easy to maintain">
        One core principle is maintainability and preferably the ease of doing it. Lessons learned through multiple
        projects;{' '}
        <span>
          <i>
            "Keeping a project tidy and neat creates less bugs and coats the project with a future proof spray.{' '}
            <sup>*Please don't quote me!</sup>
          </i>
        </span>
      </StoriesSection>
      <StoriesSection header="Accessible">
        We follow WCAG 2.1 AA
        <span>Resources:</span>
        <span>
          <ul>
            <li>
              <a href="https://www.w3.org/WAI/WCAG21/quickref/?currentsidebar=%23col_overview&levels=aaa">
                W3C Quick Reference
              </a>
            </li>
            <li>
              <a href="https://www.a11yproject.com/checklist/">The A11Y Project Checklist</a>
            </li>
          </ul>
        </span>
      </StoriesSection>
    </StoriesWrapper>
  );
});

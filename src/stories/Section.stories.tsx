import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';

import RudderLogo from 'assets/rudder-logo.png';
import Image from 'components/Image';
import Links from 'components/Links';
import Link from 'components/NewLink';
import Section, { propTypes } from 'components/Section';
import SectionTitle from 'components/SectionTitle';
import Paragraph from 'components/Paragraph';

export default {
  title: 'Section/Section',
  component: Section,
  argTypes: {},
} as Meta;

const Template: Story<propTypes> = (args) => <Section {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  children: (
    <>
      <SectionTitle area="title">Title</SectionTitle>
      <Paragraph area="description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </Paragraph>
      <Links>
        <Link to="https://rudder.to">rudder.to</Link>
        <Link to="https://github.com/tjlaekem?tab=repositories&q=rudder&type=&language=">
          view the code
        </Link>
      </Links>
      <Image alt="test" area="image" src={RudderLogo} />
    </>
  ),
};

export const Flipped = Template.bind({});
Flipped.args = {
  children: (
    <>
      <SectionTitle area="title">Title</SectionTitle>
      <Paragraph area="description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </Paragraph>
      <Links>
        <Link to="https://rudder.to">rudder.to</Link>
        <Link to="https://github.com/tjlaekem?tab=repositories&q=rudder&type=&language=">
          view the code
        </Link>
      </Links>
      <Image alt="test" area="image" src={RudderLogo} />
    </>
  ),
  isFlipped: true,
};

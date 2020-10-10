import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';

import Banner from 'components/Banner';
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

export const Intro = Template.bind({});
Intro.args = {
  children: <Banner>Test!</Banner>,
};

export const Experience = Template.bind({});
Experience.args = {
  children: (
    <>
      <SectionTitle>Title</SectionTitle>
      <Paragraph>Software Engineer, August 2018&ndash;Present</Paragraph>
      <Paragraph>
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
    </>
  ),
};

export const Project = Template.bind({});
Project.args = {
  children: (
    <>
      <SectionTitle>Title</SectionTitle>
      <Paragraph>
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
    </>
  ),
};

export const Education = Template.bind({});
Education.args = {
  children: (
    <>
      <SectionTitle>University of Waterloo</SectionTitle>
      <Paragraph>
        Bachelor of Applied Science in Honours Computer Engineering,
        Co-operative Program
      </Paragraph>
      <Paragraph>Graduated June 2018</Paragraph>
      <Paragraph>
        I learned a lot during my time at the University of Waterloo. As a
        student in the computer engineering program, I learned about the
        hardware and software of modern computers.
      </Paragraph>
    </>
  ),
};

import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';

import RudderLogo from 'assets/rudder-logo.png';
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

export const Default = Template.bind({});
Default.args = {
  children: <Banner>Test!</Banner>,
};

export const DefaultFlipped = Template.bind({});
DefaultFlipped.args = {
  children: <Banner>Test!</Banner>,
  isFlipped: true,
};

export const Experience = Template.bind({});
Experience.args = {
  children: (
    <>
      <SectionTitle area="title">Title</SectionTitle>
      <Paragraph area="role">
        Software Engineer, August 2018&ndash;Present
      </Paragraph>
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
    </>
  ),
  type: 'experience',
};

export const ExperienceFlipped = Template.bind({});
ExperienceFlipped.args = {
  children: (
    <>
      <SectionTitle area="title">Title</SectionTitle>
      <Paragraph area="role">
        Software Engineer, August 2018&ndash;Present
      </Paragraph>
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
    </>
  ),
  isFlipped: true,
  type: 'experience',
};

export const Project = Template.bind({});
Project.args = {
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
    </>
  ),
  type: 'project',
};

export const ProjectFlipped = Template.bind({});
ProjectFlipped.args = {
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
    </>
  ),
  isFlipped: true,
  type: 'project',
};

export const Education = Template.bind({});
Education.args = {
  children: (
    <>
      <SectionTitle area="title">University of Waterloo</SectionTitle>
      <Paragraph area="degree">
        Bachelor of Applied Science in Honours Computer Engineering,
        Co-operative Program
      </Paragraph>
      <Paragraph area="dates">Graduated June 2018</Paragraph>
      <Paragraph area="description">
        I learned a lot during my time at the University of Waterloo. As a
        student in the computer engineering program, I learned about the
        hardware and software of modern computers.
      </Paragraph>
    </>
  ),
  type: 'education',
};

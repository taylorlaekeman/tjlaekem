import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';

import Link from 'components/Link';
import Section, { propTypes } from 'components/Section';
import Text from 'components/Text';

export default {
  title: 'Section/Section',
  component: Section,
  argTypes: {},
} as Meta;

const Template: Story<propTypes> = (args) => <Section {...args} />;

export const Intro = Template.bind({});
Intro.args = {
  children: <Text type="banner">Test!</Text>,
};

export const Experience = Template.bind({});
Experience.args = {
  children: (
    <>
      <Text type="section">Title</Text>
      <Text type="paragraph">Software Engineer, August 2018&ndash;Present</Text>
      <Text type="paragraph">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </Text>
      <Link to="https://rudder.to">rudder.to</Link>
      <Link to="https://github.com/tjlaekem?tab=repositories&q=rudder&type=&language=">
        view the code
      </Link>
    </>
  ),
};

export const Project = Template.bind({});
Project.args = {
  children: (
    <>
      <Text type="section">Title</Text>
      <Text type="paragraph">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </Text>
      <Link to="https://rudder.to">rudder.to</Link>
      <Link to="https://github.com/tjlaekem?tab=repositories&q=rudder&type=&language=">
        view the code
      </Link>
    </>
  ),
};

export const Education = Template.bind({});
Education.args = {
  children: (
    <>
      <Text type="section">University of Waterloo</Text>
      <Text type="paragraph">
        Bachelor of Applied Science in Honours Computer Engineering,
        Co-operative Program
      </Text>
      <Text type="paragraph">Graduated June 2018</Text>
      <Text type="paragraph">
        I learned a lot during my time at the University of Waterloo. As a
        student in the computer engineering program, I learned about the
        hardware and software of modern computers.
      </Text>
    </>
  ),
};

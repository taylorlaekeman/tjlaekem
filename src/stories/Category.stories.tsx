import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';

import RudderLogo from 'assets/rudder-logo.png';
import Category, { propTypes } from 'components/Category';
import CategoryTitle from 'components/CategoryTitle';
import Image from 'components/Image';
import Links from 'components/Links';
import Link from 'components/NewLink';
import Section from 'components/Section';
import SectionTitle from 'components/SectionTitle';
import Paragraph from 'components/Paragraph';

export default {
  title: 'Category/Category',
  component: Category,
  argTypes: {},
} as Meta;

const Template: Story<propTypes> = (args) => <Category {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  children: (
    <>
      <CategoryTitle>Projects</CategoryTitle>
      <Section>
        <SectionTitle area="title">Title</SectionTitle>
        <Paragraph area="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Paragraph>
        <Links>
          <Link to="test">view the site</Link>
          <Link to="test">view the code</Link>
        </Links>
        <Image alt="test" area="image" src={RudderLogo} />
      </Section>
      <Section isFlipped>
        <SectionTitle area="title">Title</SectionTitle>
        <Paragraph area="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Paragraph>
        <Links>
          <Link to="test">view the site</Link>
          <Link to="test">view the code</Link>
        </Links>
        <Image alt="test" area="image" src={RudderLogo} />
      </Section>
      <Section>
        <SectionTitle area="title">Title</SectionTitle>
        <Paragraph area="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Paragraph>
        <Links>
          <Link to="test">view the site</Link>
          <Link to="test">view the code</Link>
        </Links>
        <Image alt="test" area="image" src={RudderLogo} />
      </Section>
    </>
  ),
};

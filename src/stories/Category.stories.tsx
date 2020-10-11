import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';

import Category, { propTypes } from 'components/Category';
import Link from 'components/Link';
import Section from 'components/Section';
import Text from 'components/Text';

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
      <Text type="category">Projects</Text>
      <Section>
        <Text type="section">Title</Text>
        <Text type="paragraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Text>
        <Link to="test">view the site</Link>
        <Link to="test">view the code</Link>
      </Section>
      <Section>
        <Text type="section">Title</Text>
        <Text type="paragraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Text>
        <Link to="test">view the site</Link>
        <Link to="test">view the code</Link>
      </Section>
      <Section>
        <Text type="section">Title</Text>
        <Text type="paragraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Text>
        <Link to="test">view the site</Link>
        <Link to="test">view the code</Link>
      </Section>
    </>
  ),
};

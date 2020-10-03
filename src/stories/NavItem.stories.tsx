import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';

import NavItem, { propTypes } from 'components/NavItem';

export default {
  title: 'Nav/NavItem',
  component: NavItem,
  argTypes: {},
} as Meta;

const Template: Story<propTypes> = (args) => <NavItem {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  children: 'Projects',
  to: 'projects',
};

export const Current = Template.bind({});
Current.args = {
  children: 'Projects',
  isCurrent: true,
  to: 'projects',
};

export const LongText = Template.bind({});
LongText.args = {
  children:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  to: 'long',
};

export const WithoutTo = Template.bind({});
WithoutTo.args = {
  children: 'Projects',
};

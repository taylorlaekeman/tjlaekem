import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';

import NavItem, { propTypes } from 'components/NavItem';

export default {
  title: 'NavItem',
  component: NavItem,
  argTypes: {},
} as Meta;

const Template: Story<propTypes> = (args) => <NavItem {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  children: 'Projects',
  isCurrent: false,
};

export const Current = Template.bind({});
Current.args = {
  children: 'Projects',
  isCurrent: true,
};

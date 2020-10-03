import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';

import Nav, { propTypes } from 'components/Nav';
import NavItem from 'components/NavItem';

export default {
  title: 'Nav/Nav',
  component: Nav,
  argTypes: {},
} as Meta;

const Template: Story<propTypes> = (args) => <Nav {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  children: (
    <>
      <NavItem>Hello!</NavItem>
      <NavItem isCurrent>Experience</NavItem>
      <NavItem>Projects</NavItem>
      <NavItem>Education</NavItem>
      <NavItem>Contact</NavItem>
    </>
  ),
};

export const Empty = Template.bind({});
Empty.args = {};

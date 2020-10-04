import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';

import Link, { propTypes } from 'components/NewLink';

export default {
  title: 'Link',
  component: Link,
  argTypes: {},
} as Meta;

const Template: Story<propTypes> = (args) => <Link {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  children: 'visit website',
  to: 'rudder.to',
};

export const Plain = Template.bind({});
Plain.args = {
  children: 'visit website',
  to: 'rudder.to',
  type: 'plain'
};

export const Button = Template.bind({});
Button.args = {
  children: 'visit website',
  to: 'rudder.to',
  type: 'button',
};

export const NoTarget = Template.bind({});
NoTarget.args = {
  children: 'visit website',
};

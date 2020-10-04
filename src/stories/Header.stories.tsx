import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';

import Header, { propTypes } from 'components/Header';

export default {
  title: 'Header',
  component: Header,
  argTypes: {},
} as Meta;

const Template: Story<propTypes> = (args) => <Header {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  children: 'Taylor Laekeman',
};

import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';

import Header from 'components/Header';

export default {
  title: 'Header',
  component: Header,
  argTypes: {},
} as Meta;

const Template: Story = () => <Header />;

export const Normal = Template.bind({});

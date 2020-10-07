import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';

import Tjlaekem from 'components/Tjlaekem';

export default {
  title: 'Pages/Tjlaekem',
  component: Tjlaekem,
  argTypes: {},
} as Meta;

const Template: Story = (args) => <Tjlaekem {...args} />;

export const Normal = Template.bind({});

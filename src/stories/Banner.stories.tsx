import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';

import Banner, { propTypes } from 'components/Banner';

export default {
  title: 'Text/Banner',
  component: Banner,
  argTypes: {},
} as Meta;

const Template: Story<propTypes> = (args) => <Banner {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  children: "Hi! I'm Taylor",
};

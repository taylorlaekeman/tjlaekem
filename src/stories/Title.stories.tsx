import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';

import Title, { propTypes } from 'components/Title';

export default {
  title: 'Text/Title',
  component: Title,
  argTypes: {},
} as Meta;

const Template: Story<propTypes> = (args) => <Title {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  children: 'test',
};

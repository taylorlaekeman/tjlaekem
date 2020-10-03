import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';

import CategoryTitle, { propTypes } from 'components/CategoryTitle';

export default {
  title: 'Text/CategoryTitle',
  component: CategoryTitle,
  argTypes: {},
} as Meta;

const Template: Story<propTypes> = (args) => <CategoryTitle {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  children: 'Projects',
};

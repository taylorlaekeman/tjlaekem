import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';

import SectionTitle, { propTypes } from 'components/SectionTitle';

export default {
  title: 'Text/SectionTitle',
  component: SectionTitle,
  argTypes: {},
} as Meta;

const Template: Story<propTypes> = (args) => <SectionTitle {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  children: 'Projects',
};

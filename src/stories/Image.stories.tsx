import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';

import RudderLogo from 'assets/rudder-logo.png';
import Image, { propTypes } from 'components/Image';

export default {
  title: 'Image',
  component: Image,
  argTypes: {},
} as Meta;

const Template: Story<propTypes> = (args) => <Image {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  alt: 'test',
  src: RudderLogo,
};

export const EmptyWithAltText = Template.bind({});
EmptyWithAltText.args = {
  alt: 'test',
};

export const EmptyWithoutAltText = Template.bind({});
EmptyWithoutAltText.args = {};

export const BadSource = Template.bind({});
BadSource.args = {
  alt: 'bad',
  src: 'bad',
};

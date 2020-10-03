import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';

import ColourPalette, { propTypes } from 'components/ColourPalette';

export default {
  title: 'Colours/Palette',
  component: ColourPalette,
  argTypes: {},
} as Meta;

const Template: Story<propTypes> = (args) => <ColourPalette {...args} />;

export const Neutral = Template.bind({});
Neutral.args = {
  palette: 'neutral',
};

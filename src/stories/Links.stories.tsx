import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';

import Links, { propTypes } from 'components/Links';
import Link from 'components/NewLink';

export default {
  title: 'Section/Links',
  component: Links,
  argTypes: {},
} as Meta;

const Template: Story<propTypes> = (args) => <Links {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  children: (
    <>
      <Link to="https://rudder.to">visit site</Link>
      <Link to="https://github.com/tjlaekem?tab=repositories&q=rudder&type=&language=">view the code</Link>
    </>
  ),
};

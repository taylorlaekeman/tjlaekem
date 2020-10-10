import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';

import Text, { propTypes } from 'components/Text';

export default {
  title: 'Text',
  component: Text,
  argTypes: {},
} as Meta;

const Template: Story<propTypes> = (args) => <Text {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Lorem ipsum dolor sit amet.',
};

export const Paragraph = Template.bind({});
Paragraph.args = {
  children: 'Lorem ipsum dolor sit amet.',
  type: 'paragraph',
};

export const LongParagraph = Template.bind({});
LongParagraph.args = {
  children:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque fringilla egestas. Quisque rutrum malesuada nisi. Aliquam porta consectetur arcu, sit amet sollicitudin justo sollicitudin ut. Duis quis rhoncus lacus. Sed sodales eu turpis egestas bibendum. Cras faucibus bibendum enim, vel pellentesque nisl hendrerit eget. Praesent tempor, ipsum ac commodo maximus, tellus leo malesuada orci, imperdiet finibus elit leo eget lectus. Curabitur ultricies nisi ac lorem tincidunt, bibendum accumsan eros consectetur. Nam congue lacus quam, quis interdum nibh suscipit a. Pellentesque vel orci ligula. Vivamus sit amet mauris eget libero sollicitudin tempus. Nam efficitur efficitur odio vel auctor. Quisque imperdiet tristique leo. Donec facilisis volutpat lacus in sodales.',
  type: 'paragraph',
};

export const SectionTitle = Template.bind({});
SectionTitle.args = {
  children: 'Lorem ipsum dolor sit amet.',
  type: 'section-title',
};

export const LongSectionTitle = Template.bind({});
LongSectionTitle.args = {
  children:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque fringilla egestas. Quisque rutrum malesuada nisi. Aliquam porta consectetur arcu, sit amet sollicitudin justo sollicitudin ut. Duis quis rhoncus lacus. Sed sodales eu turpis egestas bibendum. Cras faucibus bibendum enim, vel pellentesque nisl hendrerit eget. Praesent tempor, ipsum ac commodo maximus, tellus leo malesuada orci, imperdiet finibus elit leo eget lectus. Curabitur ultricies nisi ac lorem tincidunt, bibendum accumsan eros consectetur. Nam congue lacus quam, quis interdum nibh suscipit a. Pellentesque vel orci ligula. Vivamus sit amet mauris eget libero sollicitudin tempus. Nam efficitur efficitur odio vel auctor. Quisque imperdiet tristique leo. Donec facilisis volutpat lacus in sodales.',
  type: 'section-title',
};

export const CategoryTitle = Template.bind({});
CategoryTitle.args = {
  children: 'Lorem ipsum dolor sit amet.',
  type: 'category-title',
};

export const LongCategoryTitle = Template.bind({});
LongCategoryTitle.args = {
  children:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque fringilla egestas. Quisque rutrum malesuada nisi. Aliquam porta consectetur arcu, sit amet sollicitudin justo sollicitudin ut. Duis quis rhoncus lacus. Sed sodales eu turpis egestas bibendum. Cras faucibus bibendum enim, vel pellentesque nisl hendrerit eget. Praesent tempor, ipsum ac commodo maximus, tellus leo malesuada orci, imperdiet finibus elit leo eget lectus. Curabitur ultricies nisi ac lorem tincidunt, bibendum accumsan eros consectetur. Nam congue lacus quam, quis interdum nibh suscipit a. Pellentesque vel orci ligula. Vivamus sit amet mauris eget libero sollicitudin tempus. Nam efficitur efficitur odio vel auctor. Quisque imperdiet tristique leo. Donec facilisis volutpat lacus in sodales.',
  type: 'category-title',
};

export const Banner = Template.bind({});
Banner.args = {
  children: 'Lorem ipsum dolor sit amet.',
  type: 'banner',
};

export const LongBanner = Template.bind({});
LongBanner.args = {
  children:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque fringilla egestas. Quisque rutrum malesuada nisi. Aliquam porta consectetur arcu, sit amet sollicitudin justo sollicitudin ut. Duis quis rhoncus lacus. Sed sodales eu turpis egestas bibendum. Cras faucibus bibendum enim, vel pellentesque nisl hendrerit eget. Praesent tempor, ipsum ac commodo maximus, tellus leo malesuada orci, imperdiet finibus elit leo eget lectus. Curabitur ultricies nisi ac lorem tincidunt, bibendum accumsan eros consectetur. Nam congue lacus quam, quis interdum nibh suscipit a. Pellentesque vel orci ligula. Vivamus sit amet mauris eget libero sollicitudin tempus. Nam efficitur efficitur odio vel auctor. Quisque imperdiet tristique leo. Donec facilisis volutpat lacus in sodales.',
  type: 'banner',
};

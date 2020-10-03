import React from 'react';
import { StoryContext, StoryGetter, StoryWrapper } from '@storybook/addons';
import { ThemeProvider } from 'styled-components';

import theme from 'styles/theme';

const withThemeProvider = (Story, context) => (
  <ThemeProvider theme={theme}>
    <Story {...context} />
  </ThemeProvider>
);

export const decorators = [withThemeProvider];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

import React from 'react';
import { ThemeProvider } from 'styled-components';

import Event from 'components/Event';
import Global from 'styles/Global';
import theme from 'styles/theme';

export default () => {
  return (
    <ThemeProvider theme={theme}>
      <Global />
      <header>
        <h1>Taylor Laekeman</h1>
      </header>
      <Event title="Today" />
      <Event
        date="August 20, 2018"
        title="Joined Canvass Analytics as a Full-stack Web Developer"
      />
    </ThemeProvider>
  );
};

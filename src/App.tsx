import React, { FunctionComponent } from 'react';
import { ThemeProvider } from 'styled-components';

import Tjlaekem from 'components/Tjlaekem';
import GlobalStyles from 'styles/GlobalStyles';
import theme from 'styles/theme';

const App: FunctionComponent = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <Tjlaekem />
  </ThemeProvider>
);

export default App;

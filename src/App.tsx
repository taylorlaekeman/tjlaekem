import React, { FunctionComponent } from 'react';
import { ThemeProvider } from 'styled-components';

import OldApp from 'components/OldApp';
import Global from 'styles/Global';
import theme from 'styles/theme';

const App: FunctionComponent = () => (
  <ThemeProvider theme={theme}>
    <Global />
    <OldApp />
  </ThemeProvider>
);

export default App;

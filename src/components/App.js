import React from 'react';
import { ThemeProvider } from 'styled-components';

import Global from 'styles/Global';
import theme from 'styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Global />
      <header>
        <h1>Taylor Laekeman</h1>
      </header>
    </ThemeProvider>
  );
}

export default App;

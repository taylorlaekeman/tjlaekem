import { createGlobalStyle } from 'styled-components';

import themeDefinition from 'styles/theme';

const globalStyle = createGlobalStyle`
  * {
    margin: 0;
  }

  body {
    background-color: ${({ theme }: propTypes) => theme.colours.background};
    color: ${({ theme }: propTypes) => theme.colours.text};
    font-family: 'Montserrat', sans-serif;
  }

  h1 {
    font-size: ${({ theme }: propTypes) => theme.fonts['extra-large']};
    font-weight: 600;
  }

  h2 {
    margin: 0;
    font-size: ${({ theme }: propTypes) => theme.fonts.large};
  }

  time {
    font-size: ${({ theme }: propTypes) => theme.fonts.small};
    font-weight: 400;
  }

  p {
    font-size: ${({ theme }: propTypes) => theme.fonts.medium};
  }
`;

type propTypes = { theme: typeof themeDefinition };

export default globalStyle;

import { createGlobalStyle } from 'styled-components';

import themeDefinition from 'styles/theme';

const globalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    color: ${({ theme }: propTypes) => theme.colours.text};
    font-family: ${({ theme }: propTypes) => theme.font};
    margin: 0;
    padding: 0;
  }
`;

type propTypes = { theme: typeof themeDefinition };

export default globalStyle;

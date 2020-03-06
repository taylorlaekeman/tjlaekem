import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  body {
    background-color: ${props => props.theme.colours.background};
    color: ${props => props.theme.colours.text};
    padding: 24px;
    margin: 0;
  }

  h1 {
    margin: 0;
  }
`;

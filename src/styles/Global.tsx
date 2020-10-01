import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
  }

  body {
    background-color: ${(props) => props.theme.colours.background};
    color: ${(props) => props.theme.colours.text};
    font-family: 'Montserrat', sans-serif;
  }

  h1 {
    font-size: ${(props) => props.theme.fonts['extra-large']};
    font-weight: 600;
  }

  h2 {
    margin: 0;
    font-size: ${(props) => props.theme.fonts.large};
  }

  time {
    font-size: ${(props) => props.theme.fonts.small};
    font-weight: 400;
  }

  p {
    font-size: ${(props) => props.theme.fonts.medium};
  }
`;

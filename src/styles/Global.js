import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Montserrat:400,500,600&display=swap');

  body {
    background-color: ${props => props.theme.colours.background};
    color: ${props => props.theme.colours.text};
    padding: 24px;
    margin: 0;
    font-family: 'Montserrat', sans-serif;
  }

  h1 {
    margin: 0;
    font-size: ${props => props.theme.fonts.large};
    font-weight: 600;
  }
`;

import React, { FunctionComponent } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';

import { ReactComponent as UnstyledEnvelope } from 'assets/envelope.svg';
import { ReactComponent as UnstyledGithub } from 'assets/github.svg';
import Home from 'components/Home';
import Link from 'components/Link';
import Resume from 'components/Resume';
import Global from 'styles/Global';
import theme from 'styles/theme';

const App: FunctionComponent = () => (
  <ThemeProvider theme={theme}>
    <Global />
    <Article>
      <Header>
        <h1>Taylor Laekeman</h1>
        <a href="mailto:hello@tjlaekem.dev">
          <Envelope />
        </a>
        <a href="https://github.com/tjlaekem">
          <Github />
        </a>
      </Header>
      <Router>
        <Switch>
          <Route path="/resume">
            <Resume />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
      <Footer>
        <List>
          <Item>
            <Link href="mailto:hello@tjlaekem.dev">Email</Link>
          </Item>
          <Item>
            <Link href="https://github.com/tjlaekem">GitHub</Link>
          </Item>
          <Item>
            <Link href="https://www.linkedin.com/in/tjlaekem/">LinkedIn</Link>
          </Item>
        </List>
        <Copyright>
          &copy;
          {` ${new Date(Date.now()).getFullYear()} Taylor Laekeman`}
        </Copyright>
      </Footer>
    </Article>
  </ThemeProvider>
);

const Article = styled.article`
  display: grid;
  grid-template-areas:
    'header '
    'content'
    'footer ';
`;

const Header = styled.header`
  grid-area: header;
  display: grid;
  grid-template-areas: 'name envelope github';
  grid-template-columns: 1fr min-content min-content;
  grid-gap: 12px;
  align-items: center;
  ${(props) => props.theme.responsivePadding}
`;

const Envelope = styled(UnstyledEnvelope)`
  grid-area: envelope;
  fill: ${(props) => props.theme.colours.icon};
  height: 20px;
  width: 20px;
`;

const Github = styled(UnstyledGithub)`
  grid-area: github;
  fill: ${(props) => props.theme.colours.icon};
  height: 24px;
  width: 24px;
`;

const Footer = styled.footer`
  grid-area: footer;
  background-color: ${(props) => props.theme.colours.footer.background};
  color: ${(props) => props.theme.colours.footer.text};
  ${(props) => props.theme.responsivePadding}
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const Item = styled.li`
  padding: 2px;
`;

const Copyright = styled.p`
  margin: 24px 0;
`;

export default App;

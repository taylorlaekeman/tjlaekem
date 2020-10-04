import React, { FunctionComponent } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import styled from 'styled-components';

import Header from 'components/Header';
import Home from 'components/Home';
import Link from 'components/Link';
import Resume from 'components/Resume';

const App: FunctionComponent = () => (
  <>
    <Header>Taylor Laekeman</Header>
    <Article>
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
  </>
);

const Article = styled.article`
  display: grid;
  grid-template-areas:
    'header '
    'content'
    'footer ';
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

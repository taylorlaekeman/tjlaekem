import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { ReactComponent as UnstyledGithub } from 'assets/github.svg';
import Event from 'components/Event';
import Global from 'styles/Global';
import theme from 'styles/theme';

const responsivePadding = `
  padding: 24px;

  @media (min-width: 648px) {
    padding-left: calc(50vw - 300px);
    padding-right: calc(50vw - 300px);
  }
`;

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
  grid-template-areas: 'name github';
  grid-template-columns: 1fr min-content;
  align-items: center;
  ${responsivePadding}
`;

const Github = styled(UnstyledGithub)`
  fill: ${props => props.theme.colours.icon};
  height: 24px;
  width: 24px;
`;

const Main = styled.main`
  grid-area: content;
  position: relative;
  ${responsivePadding}

  &:before {
    content: '';
    position: absolute;
    left: 30px;
    top: 36px;
    bottom: 158px;
    width: 2px;
    background-color: ${props => props.theme.colours.timeline};

    @media (min-width: 391px) {
      bottom: 144px;
    }

    @media (min-width: 546px) {
      bottom: 124px;
    }

    @media (min-width: 648px) {
      left: calc(50vw - 300px + 6px);
    }
  }
`;

const Footer = styled.footer`
  grid-area: footer;
  background-color: ${props => props.theme.colours.footer.background};
  color: ${props => props.theme.colours.footer.text};
  ${responsivePadding}
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const Item = styled.li`
  padding: 2px;
`;

const Link = styled.a`
  color: ${props => props.theme.colours.footer.text};
  font-weight: 500;
  font-size: 1.2rem;
`;

const Copyright = styled.p`
  margin: 24px 0;
`;

export default () => {
  return (
    <ThemeProvider theme={theme}>
      <Global />
      <Article>
        <Header>
          <h1>Taylor Laekeman</h1>
          <a href="https://github.com/tjlaekem">
            <Github />
          </a>
        </Header>
        <Main>
          <Event title="Today" />
          <Event
            date="August 20, 2018"
            technologies="React, Django, Postgres, Kafka, Kubeflow"
            title="Joined Canvass Analytics as a Full-stack Web Developer"
          />
          <Event
            date="June 9, 2018"
            title="Graduated from the University of Waterloo with a Bachelor of Applied Science in Computer Engineering"
          />
          <Event
            date="December 22, 2017"
            technologies="Knockout.js, ASP.NET"
            title="Finished a four-month internship with Fourwalls Digital as a Full-stack Web Developer"
          />
          <Event
            date="December 23, 2016"
            technologies="ASP.NET"
            title="Finished a four-month internship with AbacusNext as Backend Web Developer"
          />
          <Event
            date="April 29, 2016"
            technologies="React, Coffeescript, V8, Tornado"
            title="Finished a four-month internship with Enciricle as a Full-stack Web Developer"
          />
          <Event
            date="August 28, 2015"
            technologies="Android"
            title="Finished a four-month internship with Metricwire as an Android Developer"
          />
          <Event
            date="December 19, 2014"
            technologies="Puppet"
            title="Finished a four-month internship with CBTS Canada as a DevOps Developer"
          />
          <Event
            date="April 25, 2014"
            technologies="C++"
            title="Finished a four-month internship with Cyclica as a Backend Web Developer"
          />
          <Event
            date="April 26, 2013"
            technologies="Spring"
            title="Finished a four-month internship with Agriculture and Agri-Food Canada as a Backend Web Developer"
          />
        </Main>
        <Footer>
          <List>
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
};

import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { ReactComponent as UnstyledGithub } from 'assets/github.svg';
import Event from 'components/Event';
import Global from 'styles/Global';
import theme from 'styles/theme';

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
  padding: 24px;

  @media (min-width: 648px) {
    padding-left: calc(50vw - 300px);
    padding-right: calc(50vw - 300px);
  }
`;

const Github = styled(UnstyledGithub)`
  fill: ${props => props.theme.colours.icon};
  height: 24px;
  width: 24px;
`;

const Main = styled.main`
  grid-area: content;
  position: relative;
  padding: 24px;

  @media (min-width: 648px) {
    padding-left: calc(50vw - 300px);
    padding-right: calc(50vw - 300px);
  }

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
  padding: 24px;

  @media (min-width: 648px) {
    padding-left: calc(50vw - 300px);
    padding-right: calc(50vw - 300px);
  }
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
            title="Joined Canvass Analytics as a Full-stack Web Developer"
          />
          <Event
            date="June 9, 2018"
            title="Graduated from the University of Waterloo with a Bachelor of Applied Science in Computer Engineering"
          />
          <Event
            date="December 22, 2017"
            title="Finished an internship with Fourwalls Digital as a Full-stack Web Developer"
          />
          <Event
            date="September 5, 2017"
            title="Started an internship with Fourwalls Digital"
          />
          <Event
            date="December 23, 2016"
            title="Finished an internship with AbacusNext as Backend Web Developer"
          />
          <Event
            date="August 29, 2016"
            title="Started an internship with AbacusNext"
          />
          <Event
            date="April 29, 2016"
            title="Finished an internship with Enciricle as a Full-stack Web Developer"
          />
          <Event
            date="January 4, 2016"
            title="Started an internship with Enciricle"
          />
          <Event
            date="August 28, 2015"
            title="Finished an internship with Metricwire as an Android Developer"
          />
          <Event
            date="May 4, 2015"
            title="Started an internship with Metricwire"
          />
          <Event
            date="December 19, 2014"
            title="Finished an internship with CBTS Canada as a DevOps Developer"
          />
          <Event
            date="September 9, 2014"
            title="Started an internship with CBTS Canada"
          />
          <Event
            date="April 25, 2014"
            title="Finished an internship with Cyclica as a Backend Web Developer"
          />
          <Event
            date="January 6, 2014"
            title="Started an internship with Cyclica"
          />
          <Event
            date="April 26, 2013"
            title="Finished an internship with Agriculture and Agri-Food Canada as a Backend Web Developer"
          />
          <Event
            date="January 7, 2013"
            title="Started an internship with Agriculture and Agri-Food Canada"
          />
          <Event
            date="September 3, 2012"
            title="Started a Bachelor of Applied Science in Computer Engineering at the University of Waterloo"
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

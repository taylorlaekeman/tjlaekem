import React, { FunctionComponent } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import styled from 'styled-components';

import Category from 'components/Category';
import CategoryTitle from 'components/CategoryTitle';
import Header from 'components/Header';
import Home from 'components/Home';
import Image from 'components/Image';
import Links from 'components/Links';
import Link from 'components/Link';
import NewLink from 'components/NewLink';
import Paragraph from 'components/Paragraph';
import Resume from 'components/Resume';
import Section from 'components/Section';
import SectionTitle from 'components/SectionTitle';

const App: FunctionComponent = () => (
  <Wrapper>
    <Header>Taylor Laekeman</Header>
    <main>
      <Category>
        <CategoryTitle>Experience</CategoryTitle>
        <Section>
          <SectionTitle area="title">Canvass Analytics</SectionTitle>
          <Paragraph area="description">
            At Canvass Analytics, we build tools that allow industrial engineers
            to train machine learning models on their process data and deploy
            them for real-time predictions. As a Fullstack Software Engineer at
            Canvass, I work to identify problems, design solutions, and
            implement functionality across the stack. Most of my work focuses on
            our front-end React app, our Kafka-based ingestion pipeline, and our
            Kubeflow-orchestrated training pipeline.
          </Paragraph>
          <Image
            alt="The Canvass Analytics logo.  A geometric 'C' in a light-blue circle on a white background."
            area="image"
            src="https://static.wixstatic.com/media/0a64fb_d389afd95f6544978bb2fd978f614ac4~mv2.png/v1/fill/w_519,h_519,al_c,lg_1,q_85/0a64fb_d389afd95f6544978bb2fd978f614ac4~mv2.webp"
          />
          <Links>
            <NewLink to="https://www.canvass.io">
              read more about Canvass
            </NewLink>
          </Links>
        </Section>
      </Category>
    </main>
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
  </Wrapper>
);

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`;

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

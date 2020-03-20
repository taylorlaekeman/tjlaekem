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
    top: 62px;
    bottom: 360px;
    width: 2px;
    background-color: ${props => props.theme.colours.timeline};

    @media (min-width: 374px) {
      bottom: 342px;
    }

    @media (min-width: 403px) {
      bottom: 320px;
    }

    @media (min-width: 422px) {
      bottom: 302px;
    }

    @media (min-width: 442px) {
      bottom: 280px;
    }

    @media (min-width: 503px) {
      bottom: 262px;
    }

    @media (min-width: 636px) {
      bottom: 244px;
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

const getLinkStyles = props => `
  color: ${props.theme.colours.text};
`;

const getPlainLinkStyles = props => `
  color: ${props.theme.colours.footer.text};
  font-weight: 500;
  font-size: 1.2rem;
`;

const Link = styled.a`
  ${props => (props.plain ? getLinkStyles(props) : getPlainLinkStyles(props))}
`;

const Copyright = styled.p`
  margin: 24px 0;
`;

const CiaoEstrela2Title = (
  <>
    {'Launched '}
    <Link href="https://ciaoestrela.co" plain>
      ciaoestrela.co
    </Link>
    {' v2.0.0'}
  </>
);

const CiaoEstrelaTitle = (
  <>
    {'Launched '}
    <Link href="https://ciaoestrela.co" plain>
      ciaoestrela.co
    </Link>
  </>
);

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
          <Event
            date="Today"
            description="Canvass is building a machine learning platform for the industrial manufacturing sector that targets process experts instead of data scientists.  As a full-stack web developer, I participate in the design and implementation of features in both our front-end web application and our back-end stream processing and machine learning pipelines. I'm also involved in the short- and long-term planning of my sprint team's objectives and the Canvass recruitment process!"
            technologies="React, Django, Postgres, Kafka, Kubeflow"
            title="Work as a Full-stack Web Developer at Canvass Analytics"
          />
          <Event
            date="March 19, 2020"
            description="Almost a quarter of the way through the year, I finally got around to my January goal of creating a portfolio website."
            technologies="React"
            title="Built this website!"
          />
          <Event
            date="March 1, 2020"
            description="Ciao Estrela is my partner's art business, through which she sells handmade cards and other commisions.  This web application is the second iteration of the online store, which re-implements the functionality using more powerful development tools."
            technologies="React, Django, Postgres"
            title={CiaoEstrela2Title}
          />
          <Event
            date="June 21, 2019"
            description="The first version of Ciao Estrela was the first application that I planned, built, and deployed by myself.  It was an amazing learning experience and I eventually decided to re-write it with a more comfortable and familiar toolset."
            technologies="Flask, Postgres"
            title={CiaoEstrelaTitle}
          />
          <Event date="August 20, 2018" title="Joined Canvass Analytics" />
          <Event
            date="June 9, 2018"
            title="Graduated from the University of Waterloo with a Bachelor of Applied Science in Computer Engineering"
          />
          <Event
            date="December 22, 2017"
            description="Fourwalls is a tool built for real estate agents that helps them manage their relationships with their clients and their digital presences.  At Fourwalls I worked on administration tools for larger real estate firms and exclusive listing support."
            technologies="Knockout.js, ASP.NET"
            title="Finished a four-month internship with Fourwalls Digital as a Full-stack Web Developer"
          />
          <Event
            date="December 23, 2016"
            description="AbacusNext is a practice and document management platform for legal professionals.  Having joined just after a major aquisition, I spent my time at AbacusNext working on a back-end tool that provided a generic interface for a client two very similar servers."
            technologies="ASP.NET"
            title="Finished a four-month internship with AbacusNext as a Backend Web Developer"
          />
          <Event
            date="April 29, 2016"
            description="Encircle is working to improve the insurance claim process on every level, with tools for insurance companies, adjusters, underwriters, contractors, and customers.  I worked on several pieces of the encircle application suite, including a redesign of the web application's header and navigation system."
            technologies="React, Coffeescript, V8, Tornado"
            title="Finished a four-month internship with Enciricle as a Full-stack Web Developer"
          />
          <Event
            date="August 28, 2015"
            description="Metricwire seeks to capitalize on the advent of smart phones to capture a new level of clinical research data for willing participants.  At Metricwire I worked on a new type of survey that used location data to understand how participants managed and allocated their time in balancing their major priorities, such as work, school, and home life."
            technologies="Android"
            title="Finished a four-month internship with Metricwire as an Android Developer"
          />
          <Event
            date="December 19, 2014"
            description="CBTS Canada was an experimental Canadian development branch of the Cincinnati, Ohio-based Cincinnati Bell.  At CBTS Canada we explored IT automation and its potential use within the larger organization."
            technologies="Puppet"
            title="Finished a four-month internship with CBTS Canada as a DevOps Developer"
          />
          <Event
            date="April 25, 2014"
            description="Cyclica seeks to expand our drug discovery capabilities through their work on 'in silico' experimentation.  I worked at Cyclica very early in their timeline, and spent my internship developing a second iteration of their proof-of-concept prototype."
            technologies="C++"
            title="Finished a four-month internship with Cyclica as a Backend Web Developer"
          />
          <Event
            date="April 26, 2013"
            description="My very first professional development experience was at Agriculture and Agri-Food Canada where I worked on a web application that granted researchers' access to the newly-digitized biological information archive."
            technologies="Spring"
            title="Finished a four-month internship with Agriculture and Agri-Food Canada as a Backend Web Developer"
          />
          <Event
            date="September 3, 2012"
            title="Enrolled in the Computer Engineering program at the University of Waterloo"
          />
          <Event
            date="2010, 2011, 2012"
            description="Mr. DiRamio's classes were my first exposure to computer science and software development.  They laid a strong foundation for everything that's come since and instilled in me the passion to pursue software development as a career."
            title="Took Mr. DiRamio's Computer Science and Computer Engineering courses at Sir Winston Churchill Secondary School"
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

import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

import Event from 'components/Event';
import Global from 'styles/Global';
import theme from 'styles/theme';

const Main = styled.main`
  position: relative;

  &:before {
    content: '';
    position: absolute;
    left: 5px;
    top: 12px;
    bottom: 24px;
    width: 2px;
    background-color: ${props => props.theme.colours.timeline};
  }
`;

export default () => {
  return (
    <ThemeProvider theme={theme}>
      <Global />
      <header>
        <h1>Taylor Laekeman</h1>
      </header>
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
    </ThemeProvider>
  );
};

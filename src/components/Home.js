import React from 'react';
import styled from 'styled-components';

import Event from 'components/Event';
import getEvents from 'content/events';

const Home = () => (
  <Main>
    {getEvents().map((event) => (
      <Event
        date={event.date}
        description={event.description}
        key={event.date}
        technologies={event.technologies}
        title={event.title}
      />
    ))}
  </Main>
);

const Main = styled.main`
  grid-area: content;
  position: relative;
  ${({ theme }) => theme.responsivePadding}

  &:before {
    content: '';
    position: absolute;
    left: 30px;
    top: 50px;
    bottom: 376px;
    width: 2px;
    background-color: ${(props) => props.theme.colours.timeline};

    @media (min-width: 374px) {
      bottom: 358px;
    }

    @media (min-width: 408px) {
      bottom: 336px;
    }

    @media (min-width: 422px) {
      bottom: 318px;
    }

    @media (min-width: 448px) {
      bottom: 296px;
    }

    @media (min-width: 503px) {
      bottom: 278px;
    }

    @media (min-width: 636px) {
      bottom: 260px;
    }

    @media (min-width: 648px) {
      left: calc(50vw - 300px + 6px);
    }
  }
`;

export default Home;

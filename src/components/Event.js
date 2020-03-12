import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Article = styled.article`
  margin-bottom: 60px;
`;

const Header = styled.header`
  display: grid;
  grid-template-areas:
    '.    date '
    'icon title';
  grid-template-columns: 15px 1fr;
  grid-gap: 6px 18px;

  &:after {
    content: '';
    grid-area: icon;
    background-color: white;
    border: solid ${props => props.theme.colours.timeline} 2px;
    border-radius: 50%;
    margin-top: 3px;
    height: 15px;
    z-index: 2;
    box-sizing: border-box;
  }
`;

const Title = styled.h2`
  grid-area: title;
`;

const Time = styled.time`
  grid-area: date;
`;

const Event = ({ date, description, title }) => (
  <Article>
    <Header>
      {date && <Time>{date}</Time>}
      <Title>{title}</Title>
    </Header>
    {description && (
      <main>
        <p>{description}</p>
      </main>
    )}
  </Article>
);

Event.propTypes = {
  date: PropTypes.string,
  description: PropTypes.string,
  title: PropTypes.string.isRequired
};

Event.defaultProps = {
  date: '',
  description: ''
};

export default Event;
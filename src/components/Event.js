import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Article = styled.article`
  margin-bottom: 100px;
`;

const Header = styled.header`
  display: grid;
  grid-template-areas:
    '.    date '
    'icon title'
    '.    tech ';
  grid-template-columns: 15px 1fr;
  grid-column-gap: 18px;

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
  font-weight: 600;
  margin-top: 6px;
  margin-bottom: 4px;
`;

const Time = styled.time`
  grid-area: date;
`;

const Technologies = styled.p`
  grid-area: tech;
  font-size: ${props => props.theme.fonts.small};
  font-weight: 600;
`;

const Description = styled.p`
  margin-left: 33px;
  margin-top: 18px;
`;

const Event = ({ date, description, technologies, title }) => (
  <Article>
    <Header>
      {date && <Time>{date}</Time>}
      <Title>{title}</Title>
      {technologies && <Technologies>{technologies}</Technologies>}
    </Header>
    {description && <Description>{description}</Description>}
  </Article>
);

Event.propTypes = {
  date: PropTypes.string,
  description: PropTypes.string,
  technologies: PropTypes.string,
  title: PropTypes.oneOfType([PropTypes.element, PropTypes.string]).isRequired
};

Event.defaultProps = {
  date: '',
  description: '',
  technologies: ''
};

export default Event;

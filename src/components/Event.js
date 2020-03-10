import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Article = styled.article`
  margin: 36px 0;
`;

const Header = styled.header`
  display: grid;
  grid-gap: 6px;
`;

const Event = ({ date, description, title }) => (
  <Article>
    <Header>
      {date && <time>{date}</time>}
      <h2>{title}</h2>
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

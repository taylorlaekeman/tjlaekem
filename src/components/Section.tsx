import React, { FunctionComponent, ReactNode } from 'react';
import styled from 'styled-components';

const Section: FunctionComponent<propTypes> = ({ children }: propTypes) => (
  <Wrapper>{children}</Wrapper>
);

export type propTypes = {
  children: ReactNode;
};

const Wrapper = styled.section`
  display: grid;
  grid-gap: 40px;

  @media (min-width: 800px) {
    width: 800px;
  }
`;

export default Section;

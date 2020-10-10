import React, { FunctionComponent, ReactNode } from 'react';
import styled from 'styled-components';

const Section: FunctionComponent<propTypes> = ({ children }: propTypes) => (
  <Wrapper>{children}</Wrapper>
);

export type propTypes = {
  children: ReactNode;
};

const Wrapper = styled.section`
  margin-bottom: 160px;

  &:last-child {
    margin-bottom: 0;
  }
`;

export default Section;

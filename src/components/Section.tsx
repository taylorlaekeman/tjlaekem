import React, { FunctionComponent, ReactNode } from 'react';
import styled from 'styled-components';

const Section: FunctionComponent<propTypes> = ({
  children,
  isFlipped = false,
  type = 'default',
}: propTypes) => (
  <Wrapper $isFlipped={isFlipped} $type={type}>
    {children}
  </Wrapper>
);

export type propTypes = {
  children: ReactNode;
  isFlipped?: boolean;
};

const Wrapper = styled.section<{ $isFlipped: boolean; $type: string }>`
  display: grid;
  grid-gap: 40px;

  @media (min-width: 800px) {
    width: 800px;
  }
`;

export default Section;

import React, { FunctionComponent, ReactNode } from 'react';
import styled from 'styled-components';

const Section: FunctionComponent<propTypes> = ({
  children,
  isFlipped = false,
}: propTypes) => <Wrapper $isFlipped={isFlipped}>{children}</Wrapper>;

export type propTypes = {
  children: ReactNode;
  isFlipped?: boolean;
};

const Wrapper = styled.section`
  display: grid;
  grid-gap: 40px 60px;
  grid-template-areas: ${({ $isFlipped }) =>
    $isFlipped
      ? `
    'title       image'
    'description image';
  `
      : `
    'image title      '
    'image description';
  `}
  grid-template-columns: 1fr 1fr;
  max-width: 800px;
`;

export default Section;

import React, { FunctionComponent, ReactNode } from 'react';
import styled, { css } from 'styled-components';

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
  type?: 'project' | 'default';
};

const Wrapper = styled.section<{ $isFlipped: boolean; $type: string }>`
  ${({ $isFlipped, $type }) => getGrid($type, $isFlipped)};
  max-width: 800px;
`;

const getGrid = (type: string, isFlipped: boolean) => {
  if (isFlipped) {
    switch (type) {
      case 'project':
        return FLIPPED_PROJECT_GRID;
      default:
        return null;
    }
  } else {
    switch (type) {
      case 'project':
        return PROJECT_GRID;
      default:
        return null;
    }
  }
};

const SHARED = css`
  display: grid;
  grid-gap: 40px 60px;
  grid-template-columns: 1fr 1fr;
`;

const FLIPPED_PROJECT_GRID = css`
  ${SHARED}
  grid-template-areas:
    'image title      '
    'image description'
    'image links      ';
`;

const PROJECT_GRID = css`
  ${SHARED}
  grid-template-areas:
    'title       image'
    'description image'
    'links       image';
`;

export default Section;

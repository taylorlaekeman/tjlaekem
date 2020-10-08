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
  type?: 'default' | 'education' | 'experience' | 'project';
};

const Wrapper = styled.section<{ $isFlipped: boolean; $type: string }>`
  ${({ $isFlipped, $type }) => getGrid($type, $isFlipped)};

  @media (min-width: 800px) {
    width: 800px;
  }
`;

const getGrid = (type: string, isFlipped: boolean) => {
  if (isFlipped) {
    switch (type) {
      case 'education':
        return EDUCATION_GRID;
      case 'experience':
        return FLIPPED_EXPERIENCE_GRID;
      case 'project':
        return FLIPPED_PROJECT_GRID;
      default:
        return null;
    }
  } else {
    switch (type) {
      case 'education':
        return EDUCATION_GRID;
      case 'experience':
        return EXPERIENCE_GRID;
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

const FLIPPED_EXPERIENCE_GRID = css`
  ${SHARED}
  grid-template-areas:
    'image title      '
    'image role       '
    'image description'
    'image links      '
    'image .          ';
`;

const FLIPPED_PROJECT_GRID = css`
  ${SHARED}
  grid-template-areas:
    'image title      '
    'image description'
    'image links      '
    'image .          ';
`;

const EDUCATION_GRID = css`
  ${SHARED}
  grid-gap: 40px;
  grid-template-areas:
    'title      '
    'degree     '
    'dates      '
    'description';
  grid-template-columns: 1fr;
`;

const EXPERIENCE_GRID = css`
  ${SHARED}
  grid-template-areas:
    'title       image'
    'role        image'
    'description image'
    'links       image'
    '.           image';
`;

const PROJECT_GRID = css`
  ${SHARED}
  grid-template-areas:
    'title       image'
    'description image'
    'links       image'
    '.           image';
`;

export default Section;

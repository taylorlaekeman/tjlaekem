import React, { FunctionComponent } from 'react';
import styled, { css } from 'styled-components';

const Text: FunctionComponent<propTypes> = ({
  area = '',
  children,
  type = 'paragraph',
}: propTypes) => {
  const Component = getComponent(type);
  return <Component $area={area}>{children}</Component>;
};

export type propTypes = {
  area?: string;
  children: string;
  type?: validTypes;
};

type validTypes = 'banner' | 'category' | 'section' | 'paragraph';

const getComponent = (type: validTypes) => {
  switch (type) {
    case 'banner':
      return Banner;
    case 'category':
      return Category;
    case 'section':
      return Section;
    default:
      return Paragraph;
  }
};

const sharedStyles = css<componentPropTypes>`
  color: ${({ theme }) => theme.colours.text};
  grid-area: ${({ $area }) => $area};
  margin-bottom: 40px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const width = css`
  width: 100%;

  @media (min-width: 680px) {
    width: 600px;
  }
`;

const Banner = styled.h1<componentPropTypes>`
  ${sharedStyles}

  font-size: 2.5rem;
  font-weight: 500;

  @media (min-width: 680px) {
    font-size: 7rem;
  }
`;

const Category = styled.h2<componentPropTypes>`
  ${sharedStyles}
  ${width}

  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 4px;
  margin-bottom: 80px;
  text-transform: uppercase;

  @media (min-width: 680px) {
    font-size: 2rem;
    letter-spacing: 10px;
  }
`;

const Section = styled.h3<componentPropTypes>`
  ${sharedStyles}
  ${width}

  font-size: 1.6rem;
  font-weight: 600;

  @media (min-width: 680px) {
    font-size: 3rem;
  }
`;

const Paragraph = styled.p<componentPropTypes>`
  ${sharedStyles}
  ${width}

  font-size: 0.8rem;
  font-weight: 400;
  line-height: 30px;

  @media (min-width: 680px) {
    font-size: 1.2rem;
  }
`;

type componentPropTypes = {
  $area: string;
};

export default Text;

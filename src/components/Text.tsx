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

const Banner = styled.h1<componentPropTypes>`
  font-size: 7rem;
  font-weight: 500;
  ${sharedStyles}
`;

const Category = styled.h2<componentPropTypes>`
  font-size: 5rem;
  font-weight: 600;
  ${sharedStyles}
`;

const Section = styled.h3<componentPropTypes>`
  font-size: 3rem;
  font-weight: 600;
  ${sharedStyles}
`;

const Paragraph = styled.p<componentPropTypes>`
  font-size: 1.2rem;
  font-weight: 400;
  line-height: 30px;
  max-width: 600px;
  ${sharedStyles}
`;

type componentPropTypes = {
  $area: string;
};

export default Text;

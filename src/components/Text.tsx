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

type validTypes = 'paragraph' | 'section-title' | 'category-title' | 'banner';

const getComponent = (type: validTypes) => {
  switch (type) {
    case 'category-title':
      return CategoryTitle;
    case 'section-title':
      return SectionTitle;
    default:
      return Paragraph;
  }
};

const sharedStyles = css<componentPropTypes>`
  color: ${({ theme }) => theme.colours.text};
  grid-area: ${({ $area }) => $area};
`;

const CategoryTitle = styled.h2<componentPropTypes>`
  font-size: 5rem;
  font-weight: 600;
  ${sharedStyles}
`;

const SectionTitle = styled.h3<componentPropTypes>`
  font-size: 3rem;
  font-weight: 600;
  ${sharedStyles}
`;

const Paragraph = styled.p<componentPropTypes>`
  font-size: 1.2rem;
  font-weight: 400;
  line-height: 24px;
  max-width: 600px;
  ${sharedStyles}
`;

type componentPropTypes = {
  $area: string;
};

export default Text;

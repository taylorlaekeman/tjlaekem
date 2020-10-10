import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

const Text: FunctionComponent<propTypes> = ({
  area = '',
  children,
  type = 'paragraph',
}: propTypes) => {
  return (
    <Paragraph area={area}>{children}</Paragraph>
  );
};

export type propTypes = {
  area?: string;
  children: string;
  type?: 'paragraph' | 'section-title' | 'category-title' | 'banner';
};

const Paragraph = styled.p<{ $area: string }>`
  color: ${({ theme }) => theme.colours.text};
  font-size: 1.2rem;
  font-weight: 400;
  grid-area: ${({ $area }) => $area};
  line-height: 24px;
  max-width: 600px;
`;

export default Text;

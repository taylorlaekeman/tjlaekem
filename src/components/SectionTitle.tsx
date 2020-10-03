import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

const SectionTitle: FunctionComponent<propTypes> = ({
  area = '',
  children,
}: propTypes) => <Text $area={area}>{children}</Text>;

export type propTypes = {
  area?: string;
  children: string;
};

const Text = styled.h2<{ $area: string }>`
  color: ${({ theme }) => theme.colours.text};
  font-family: ${({ theme }) => theme.font};
  font-size: 1.6rem;
  font-weight: 600;
  grid-area: ${({ $area }) => $area};
  margin: 0;
  padding: 0;

  @media (min-width: 800px) {
    font-size: 2rem;
  }

  @media (min-width: 1400px) {
    font-size: 3rem;
  }
`;

export default SectionTitle;

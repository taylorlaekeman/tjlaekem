import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

const Paragraph: FunctionComponent<propTypes> = ({
  area = '',
  children,
}: propTypes) => <Text $area={area}>{children}</Text>;

export type propTypes = {
  area?: string;
  children: string;
};

const Text = styled.p`
  color: ${({ theme }) => theme.colours.text};
  font-family: ${({ theme }) => theme.font};
  font-size: 0.9rem;
  font-weight: 400;
  grid-area: ${({ $area }) => $area};
  margin: 0;
  padding: 0;

  @media (min-width: 400px) {
    max-width: 400px;
  }

  @media (min-width: 800px) {
    font-size: 1rem;
  }

  @media (min-width: 1400px) {
    font-size: 1.2rem;
    max-width: 600px;
  }
`;

export default Paragraph;

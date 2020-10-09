import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

const CategoryTitle: FunctionComponent<propTypes> = ({
  id = '',
  children,
}: propTypes) => <Text id={id}>{children}</Text>;

export type propTypes = {
  children: string;
  id?: string;
};

const Text = styled.h2`
  color: ${({ theme }) => theme.colours.text};
  font-family: ${({ theme }) => theme.font};
  font-size: 2rem;
  font-weight: 600;
  margin: 0;
  padding: 0;

  @media (min-width: 800px) {
    font-size: 3rem;
    width: 800px;
  }

  @media (min-width: 1400px) {
    font-size: 5rem;
  }
`;

export default CategoryTitle;

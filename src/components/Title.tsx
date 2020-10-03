import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

const Title: FunctionComponent<propTypes> = ({ children }: propTypes) => (
  <Text>{children}</Text>
);

export type propTypes = {
  children: string;
};

const Text = styled.h2`
  color: ${({ theme }) => theme.colours.text};
  font-family: ${({ theme }) => theme.font};
  font-size: 5rem;
  font-weight: 600;
  margin: 0;
  padding: 0;
`;

export default Title;

import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

const Banner: FunctionComponent<propTypes> = ({ children }: propTypes) => (
  <Text>{children}</Text>
);

export type propTypes = {
  children: string;
};

const Text = styled.p`
  font-size: 7rem;
  font-weight: 500;
`;

export default Banner;

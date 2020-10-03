import React, { FunctionComponent, ReactNode } from 'react';
import styled from 'styled-components';

const Nav: FunctionComponent<propTypes> = ({ children }: propTypes) => (
  <Wrapper>{children}</Wrapper>
);

export type propTypes = {
  children: ReactNode;
};

const Wrapper = styled.ul``;

export default Nav;

import React, { FunctionComponent, ReactNode } from 'react';
import styled from 'styled-components';

const Links: FunctionComponent<propTypes> = ({ children }: propTypes) => (
  <Wrapper>{children}</Wrapper>
);

export type propTypes = {
  children: ReactNode;
};

const Wrapper = styled.nav`
  display: flex;
  flex-direction: column;

  a {
    margin-bottom: 20px;

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

export default Links;

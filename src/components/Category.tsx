import React, { FunctionComponent, ReactNode } from 'react';
import styled from 'styled-components';

const Category: FunctionComponent<propTypes> = ({ children }: propTypes) => (
  <Wrapper>{children}</Wrapper>
);

export type propTypes = {
  children: ReactNode;
};

const Wrapper = styled.article`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 100px 0;
  min-height: 100vh;

  &:first-child {
    padding-top: 0;
  }

  &:last-child {
    padding-bottom: 0;
  }
`;

export default Category;

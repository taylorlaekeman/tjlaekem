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
  min-height: 100vh;

  & > h2 {
    margin-bottom: 100px;
  }

  & > section {
    margin-bottom: 200px;
  }
`;

export default Category;

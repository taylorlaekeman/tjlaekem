import React, { FunctionComponent, ReactNode } from 'react';
import styled from 'styled-components';

const Links: FunctionComponent<propTypes> = ({
  area = '',
  children,
}: propTypes) => <Wrapper $area={area}>{children}</Wrapper>;

export type propTypes = {
  area?: string;
  children: ReactNode;
};

const Wrapper = styled.nav<{ $area: string }>`
  display: flex;
  flex-direction: column;
  grid-area: ${({ $area }) => $area};

  a {
    margin-bottom: 20px;

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

export default Links;

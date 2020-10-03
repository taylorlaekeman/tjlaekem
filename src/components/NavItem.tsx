import React, { FunctionComponent, ReactNode } from 'react';
import styled from 'styled-components';

const NavItem: FunctionComponent<propTypes> = ({
  children,
  isCurrent = false,
}: propTypes) => (
  <Wrapper>
    {children}
    <Bar />
  </Wrapper>
);

export type propTypes = {
  children: string;
  isCurrent?: boolean;
};

const Wrapper = styled.li`
  color: ${({ theme }) => theme.colours.neutral[700]};
  display: flex;
  font-family: ${({ theme }) => theme.font};
  justify-content: space-between;
  list-style-type: none;
  max-width: 200px;
  padding: 8px 0;

  &:hover {
    color: ${({ theme }) => theme.colours.text};

    div {
      background-color: ${({ theme }) => theme.colours.neutral[700]};
    }
  }
`;

const Bar = styled.div`
  background-color: ${({ theme }) => theme.colours.neutral[500]};
  border-radius: 2px;
  margin: -6px 0;
  width: 4px;
`;

export default NavItem;

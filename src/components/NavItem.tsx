import React, { FunctionComponent, ReactNode } from 'react';
import styled from 'styled-components';

const NavItem: FunctionComponent<propTypes> = ({
  children,
  isCurrent = false,
}: propTypes) => (
  <Wrapper $isCurrent={isCurrent}>
    {children}
    <Bar $isCurrent={isCurrent} />
  </Wrapper>
);

export type propTypes = {
  children: string;
  isCurrent?: boolean;
};

const Wrapper = styled.li<{ $isCurrent: boolean }>`
  color: ${({ $isCurrent, theme }) => $isCurrent ? theme.colours.text : theme.colours.neutral[700]};
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

const Bar = styled.div<{ $isCurrent }>`
  background-color: ${({ $isCurrent, theme }) => $isCurrent ? theme.colours.neutral[700] : theme.colours.neutral[500]};
  border-radius: 2px;
  margin: -6px 0;
  width: 4px;
`;

export default NavItem;

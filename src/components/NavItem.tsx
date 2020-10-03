import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

const NavItem: FunctionComponent<propTypes> = ({
  children,
  isCurrent = false,
  to = '',
}: propTypes) => (
  <Wrapper>
    <Link href={to && `#${to}`}>
      <Text $isCurrent={isCurrent}>{children}</Text>
      <Bar $isCurrent={isCurrent} />
    </Link>
  </Wrapper>
);

export type propTypes = {
  children: string;
  isCurrent?: boolean;
  to?: string;
};

const Wrapper = styled.li`
  list-style-type: none;
  max-width: 200px;
  padding: 8px 0;

  &:hover {
    p {
      color: ${({ theme }) => theme.colours.text};
    }

    div {
      background-color: ${({ theme }) => theme.colours.neutral[700]};
    }
  }
`;

const Link = styled.a`
  appearance: none;
  cursor: default;
  display: flex;
  justify-content: space-between;
  text-decoration: none;
  width: 100%;
`;

const Text = styled.p<{ $isCurrent: boolean }>`
  color: ${({ $isCurrent, theme }) =>
    $isCurrent ? theme.colours.text : theme.colours.neutral[700]};
  font-family: ${({ theme }) => theme.font};
  font-size: 1rem;
  margin: 0;
  max-width: 90%;
  overflow: hidden;
  padding: 0;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const Bar = styled.div<{ $isCurrent: boolean }>`
  background-color: ${({ $isCurrent, theme }) =>
    $isCurrent ? theme.colours.neutral[700] : theme.colours.neutral[500]};
  border-radius: 2px;
  margin: -6px 0;
  width: 4px;
`;

export default NavItem;

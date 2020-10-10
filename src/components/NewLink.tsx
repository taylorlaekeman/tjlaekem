import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

const Link: FunctionComponent<propTypes> = ({
  children,
  to,
  type = 'default',
}: propTypes) => {
  const InnerLink = getInnerLink(type);
  return <InnerLink href={to}>{children}</InnerLink>;
};

export type propTypes = {
  children: string;
  to: string;
  type?: 'default' | 'plain' | 'button';
};

const getInnerLink = (type: string) => {
  switch (type) {
    case 'button':
      return ButtonLink;
    case 'plain':
      return PlainLink;
    default:
      return DefaultLink;
  }
};

const DefaultLink = styled.a`
  color: ${({ theme }) => theme.colours.text};
  display: block;
  font-size: 1.2rem;
  margin-bottom: 40px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const ButtonLink = styled.a`
  background-color: ${({ theme }) => theme.colours.neutral[100]};
  border-radius: 4px;
  color: ${({ theme }) => theme.colours.text};
  font-size: 1.2rem;
  text-decoration: none;
  margin-bottom: 40px;
  padding: 10px;

  &:last-child {
    margin-bottom: 0;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colours.neutral[200]};
  }
`;

const PlainLink = styled.a`
  color: ${({ theme }) => theme.colours.text};
  font-size: 0.9rem;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }

  @media (min-width: 800px) {
    font-size: 1rem;
  }

  @media (min-width: 1400px) {
    font-size: 1.2rem;
  }
`;

export default Link;

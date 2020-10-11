import React, { FunctionComponent } from 'react';
import styled, { css } from 'styled-components';

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

const sharedStyles = css`
  color: ${({ theme }) => theme.colours.text};
  font-size: 0.8rem;
  margin-bottom: 40px;

  &:last-child {
    margin-bottom: 0;
  }

  @media (min-width: 680px) {
    font-size: 1.2rem;
  }
`;

const DefaultLink = styled.a`
  ${sharedStyles}

  display: block;
`;

const ButtonLink = styled.a`
  ${sharedStyles}

  background-color: ${({ theme }) => theme.colours.neutral[100]};
  border-radius: 4px;
  text-decoration: none;
  padding: 10px;

  &:hover {
    background-color: ${({ theme }) => theme.colours.neutral[200]};
  }
`;

const PlainLink = styled.a`
  ${sharedStyles}

  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export default Link;

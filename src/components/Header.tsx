import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

import { ReactComponent as Github } from 'assets/github.svg';
import { ReactComponent as Linkedin } from 'assets/linkedin.svg';

const Header: FunctionComponent<propTypes> = ({ area = '', children }: propTypes) => (
  <Wrapper $area={area}>
    <h1>{children}</h1>
    <Socials>
      <IconLink href="https://github.com/tjlaekem">
        <Github />
      </IconLink>
      <IconLink href="https://linkedin.com/in/tjlaekem">
        <Linkedin />
      </IconLink>
    </Socials>
  </Wrapper>
);

export type propTypes = {
  area?: string;
  children: string;
};

const Wrapper = styled.header<{ $area: string }>`
  align-items: center;
  display: flex;
  grid-area: ${({ $area }) => $area};
  justify-content: space-between;
  max-width: 800px;
  width: 100%;
`;

const Socials = styled.nav`
  display: flex;

  & > a {
    margin-right: 40px;

    &:last-child {
      margin-right: 0;
    }
  }
`;

const IconLink = styled.a`
  display: block;
  fill: ${({ theme }) => theme.colours.neutral[600]};
  width: 24px;

  &:hover {
    fill: ${({ theme }) => theme.colours.neutral[900]};
  }
`;

export default Header;

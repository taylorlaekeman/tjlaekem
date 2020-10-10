import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

import { ReactComponent as Github } from 'assets/github.svg';
import { ReactComponent as Linkedin } from 'assets/linkedin.svg';

const Header: FunctionComponent = () => (
  <Wrapper>
    <Text>Taylor Laekeman</Text>
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

const Wrapper = styled.header`
  align-items: center;
  display: flex;
  justify-content: space-between;
  width: 100%;

  @media (min-width: 600px) {
    width: 600px;
  }
`;

const Text = styled.p`
  font-size: 1.1rem;
  font-weight: 600;

  @media (min-width: 600px) {
    font-size: 1.6rem;
  }
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
  width: 18px;

  &:hover {
    fill: ${({ theme }) => theme.colours.neutral[900]};
  }

  @media (min-width: 600px) {
    width: 24px;
  }
`;

export default Header;

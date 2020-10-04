import React, { FunctionComponent, ReactNode } from 'react';

const Nav: FunctionComponent<propTypes> = ({ children }: propTypes) => (
  <nav>
    <ul>{children}</ul>
  </nav>
);

export type propTypes = {
  children: ReactNode;
};

export default Nav;

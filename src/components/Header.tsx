import React, { FunctionComponent } from 'react';

const Header: FunctionComponent<propTypes> = ({ children }: propTypes) => (
  <div>header</div>
);

export type propTypes = {
  children: string;
};

export default Header;

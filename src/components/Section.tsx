import React, { FunctionComponent, ReactNode } from 'react';

const Section: FunctionComponent<propTypes> = ({ children }: propTypes) => (
  <section>{children}</section>
);

export type propTypes = {
  children: ReactNode;
};

export default Section;

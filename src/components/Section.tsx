import React, { FunctionComponent, ReactNode } from 'react';
import styled from 'styled-components';

const Section: FunctionComponent<propTypes> = ({ children }: propTypes) => (
  <section>{children}</section>
);

export type propTypes = {
  children: ReactNode;
};

export default Section;

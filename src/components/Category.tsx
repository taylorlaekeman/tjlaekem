import React, { FunctionComponent, ReactNode } from 'react';

const Category: FunctionComponent<propTypes> = ({ children }: propTypes) => (
  <div>category</div>
);

export type propTypes = {
  children: ReactNode;
};

export default Category;

import React, { FunctionComponent } from 'react';

const Text: FunctionComponent<propTypes> = ({ children }: propTypes) => (
  <div>text</div>
);

export type propTypes = {
  children: string;
};

export default Text;

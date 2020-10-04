import React, { FunctionComponent } from 'react';

const Banner: FunctionComponent<propTypes> = ({ children }: propTypes) => (
  <div>banner</div>
);

export type propTypes = {
  children: string;
};

export default Banner;

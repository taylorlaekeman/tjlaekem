import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

const ColourPalette: FunctionComponent = ({ palette }: propTypes) => (
  <Wrapper>
    {SHADES.map((shade) => (
      <ColourTile $palette={palette} $shade={shade} />
    ))}
  </Wrapper>
);

export type propTypes = {
  palette?: string;
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  grid-template-rows: 10fr repeat(10, 1fr);;
  height: 500px;
  width: 100%;
`;

const ColourTile = styled.div<{ $palette: string; $shade: string; }>`
  background-color: green;
  ${({ theme, $palette, $shade }) => {
    console.log({ theme, $palette, $shade });
    console.log(theme.colours);
  }}
  height: 100%;
  width: 100%;
`;

const SHADES = [
  '100',
  '200',
  '300',
  '400',
  '500',
  '600',
  '700',
  '800',
  '900',
];

const TextTile = styled.div`
`;

export default ColourPalette;

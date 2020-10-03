import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

const ColourPalette: FunctionComponent<propTypes> = ({
  palette,
}: propTypes) => (
  <Wrapper>
    {SHADES.map((shade) => (
      <ColourTile key={shade} $palette={palette} $shade={shade} />
    ))}
    {SHADES.map((shade) => (
      <TextTile
        $backgroundPalette="white"
        key={shade}
        $textPalette={palette}
        $textShade={shade}
      >
        Taylor Laekeman
      </TextTile>
    ))}
    {SHADES.map((backgroundShade) =>
      SHADES.map((textShade) => (
        <TextTile
          $backgroundPalette={palette}
          $backgroundShade={backgroundShade}
          key={`${textShade}-${backgroundShade}`}
          $textPalette={palette}
          $textShade={textShade}
        >
          Taylor Laekeman
        </TextTile>
      ))
    )}
  </Wrapper>
);

export type propTypes = {
  palette: 'neutral';
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  grid-template-rows: 10fr repeat(10, 1fr);
  height: 600px;
  width: 100%;
`;

const ColourTile = styled.div<{ $palette: string; $shade: string }>`
  background-color: ${({ $palette, $shade, theme }) =>
    theme.colours[$palette][$shade]};
  height: 100%;
  width: 100%;

  &:first-child {
    border-radius: 10px 0 0 0;
  }

  &:nth-child(9) {
    border-radius: 0 10px 0 0;
  }
`;

const SHADES = ['100', '200', '300', '400', '500', '600', '700', '800', '900'];

const TextTile = styled.div<{
  $backgroundPalette: string;
  $backgroundShade?: string;
  $textPalette: string;
  $textShade: string;
}>`
  align-items: center;
  background-color: ${({ $backgroundPalette, $backgroundShade, theme }) =>
    $backgroundShade
      ? theme.colours[$backgroundPalette][$backgroundShade]
      : theme.colours[$backgroundPalette]};
  color: ${({ $textPalette, $textShade, theme }) =>
    theme.colours[$textPalette][$textShade]};
  display: flex;
  font-family: ${({ theme }) => theme.font};
  font-size: 0.8rem;
  justify-content: center;

  &:nth-child(91) {
    border-radius: 0 0 0 10px;
  }

  &:last-child {
    border-radius: 0 0 10px 0;
  }
`;

export default ColourPalette;

import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

import Paragraph from 'components/Paragraph';

const Image: FunctionComponent<propTypes> = ({
  alt,
  area = '',
  src,
}: propTypes) => {
  if (!src)
    return (
      <ErrorWrapper $area={area}>
        <Paragraph>Oops! This image is missing a source!</Paragraph>
      </ErrorWrapper>
    );

  if (!alt)
    return (
      <ErrorWrapper $area={area}>
        <Paragraph>Oops! This image is missing alt text!</Paragraph>
      </ErrorWrapper>
    );

  return <StyledImage alt={alt} $area={area} src={src} />;
};

export type propTypes = {
  alt: string;
  area?: string;
  src: string;
};

const StyledImage = styled.img<{ $area: string }>`
  grid-area: ${({ $area }) => $area};
  width: 100%;
`;

const ErrorWrapper = styled.div<{ $area: string }>`
  align-items: center;
  border: solid ${({ theme }) => theme.colours.neutral[500]} 1px;
  border-radius: 6px;
  display: flex;
  grid-area: ${({ $area }) => $area};
  justify-content: center;
  padding: 20px;
`;

export default Image;

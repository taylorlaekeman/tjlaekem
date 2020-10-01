import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

import { ReactComponent as UnstyledCog } from 'assets/cog.svg';

const LoadingIndicator: FunctionComponent<propTypes> = ({
  area = '',
  centered = false,
  className = '',
  large = false,
}: propTypes) => {
  if (centered)
    return (
      <Wrapper $area={area} className={className}>
        <Cog large={large} />
      </Wrapper>
    );

  return <Cog area={area} className={className} large={large} />;
};

type propTypes = {
  area?: string;
  centered?: boolean;
  className?: string;
  large?: boolean;
};

const Wrapper = styled.div<{ $area: string }>`
  align-items: center;
  grid-area: ${({ $area }) => $area};
  display: flex;
  height: 100%;
  justify-content: center;
`;

const Cog = styled(({ className }) => <UnstyledCog className={className} />)`
  animation: spin 2s linear infinite;
  fill: ${(props) => props.theme.colours.grey};
  height: 32px;
  width: 32px;

  @keyframes spin {
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default LoadingIndicator;

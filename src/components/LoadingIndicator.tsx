import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import { ReactComponent as UnstyledCog } from 'assets/cog.svg';

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

const Wrapper = styled.div`
  align-items: center;
  grid-area: ${({ area }) => area};
  display: flex;
  height: 100%;
  justify-content: center;
`;

const LoadingIndicator = ({ area, centered, className, large }) => {
  if (centered)
    return (
      <Wrapper area={area} className={className}>
        <Cog large={large} />
      </Wrapper>
    );

  return <Cog area={area} className={className} large={large} />;
};

LoadingIndicator.defaultProps = {
  area: '',
  centered: false,
  className: '',
  large: false,
};

LoadingIndicator.propTypes = {
  area: PropTypes.string,
  centered: PropTypes.bool,
  className: PropTypes.string,
  large: PropTypes.bool,
};

export default LoadingIndicator;

import { css } from 'styled-components';

const responsivePadding = css`
  padding: 24px;

  @media (min-width: 648px) {
    padding-left: calc(50vw - 300px);
    padding-right: calc(50vw - 300px);
  }
`;

export default responsivePadding;

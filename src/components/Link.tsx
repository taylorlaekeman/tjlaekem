import styled, { css } from 'styled-components';

const Link = styled.a<{ plain?: boolean }>`
  ${({ plain }) => (plain ? plainStyles : linkStyles)}
`;

const linkStyles = css`
  color: ${({ theme }) => theme.colours.text};
`;

const plainStyles = css`
  color: ${({ theme }) => theme.colours.footer.text};
  font-weight: 500;
  font-size: 1.2rem;
`;

export default Link;

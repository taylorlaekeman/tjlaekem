import styled from 'styled-components';

const Link = styled.a`
  ${(props) => (props.plain ? getLinkStyles(props) : getPlainLinkStyles(props))}
`;

const getLinkStyles = (props) => `
  color: ${props.theme.colours.text};
`;

const getPlainLinkStyles = (props) => `
  color: ${props.theme.colours.footer.text};
  font-weight: 500;
  font-size: 1.2rem;
`;

export default Link;

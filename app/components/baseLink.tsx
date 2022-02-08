import { Link } from "remix";
import type { LinkProps } from "remix";
import styled from 'styled-components';

export default function BaseLink(props: LinkProps) {
  return <StyledLink {...props} />;
}

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

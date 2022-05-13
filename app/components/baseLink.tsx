import { Link } from "@remix-run/react";
import type { LinkProps } from "@remix-run/react";
import styled from "styled-components";

export default function BaseLink(props: LinkProps) {
  return <StyledLink {...props} />;
}

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

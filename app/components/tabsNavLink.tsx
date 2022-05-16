import { NavLink as RemixNavLink } from "@remix-run/react";
import styled from "styled-components";
import { motion } from "framer-motion";

import { Trigger } from "./radixTabs";

type NavLinkProps = {
  href: string;
  text: string;
  isActive: boolean;
};

export default function NavLink({ href, text, isActive }: NavLinkProps) {
  return (
    <Trigger asChild value={href.slice(1)}>
      <StyledLink
        style={{ color: isActive ? "var(--color-cream)" : "inherit" }}
        key={href}
        to={href}
      >
        {text}
        {isActive && <MotionSpan layoutId="active" />}
      </StyledLink>
    </Trigger>
  );
}

const StyledLink = styled(RemixNavLink)`
  &:focus {
    outline: 2px solid var(--color-orange);
    outline-offset: -6px;
    box-shadow: none;
    border-radius: 0;
  }
`;

const MotionSpan = styled(motion.span)`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: 0;

  display: flex;
  justify-content: center;
  align-items: center;
  color: hsl(64deg, 44%, 59%);
  background-color: var(--color-brown);
  z-index: -1;
  --shadow-color: 29deg 19% 58%;
  box-shadow: 0.2px -0.2px 0.3px hsl(var(--shadow-color) / 0.48),
    0.9px -0.8px 1.4px -1.2px hsl(var(--shadow-color) / 0.48),
    3.4px -3.1px 5.2px -2.5px hsl(var(--shadow-color) / 0.48);
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
`;

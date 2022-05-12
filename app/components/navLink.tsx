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
      {isActive ? (
        <RemixNavLink
          style={{ color: "var(--color-yellow)" }}
          key={href}
          to={href}
        >
          {text}
          <MotionSpan layoutId="active" />
        </RemixNavLink>
      ) : (
        <RemixNavLink key={href} to={href}>
          {text}
        </RemixNavLink>
      )}
    </Trigger>
  );
}

const MotionSpan = styled(motion.div)`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: 0;

  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--color-yellow);
  background-color: var(--color-brown);
  z-index: -1;
`;

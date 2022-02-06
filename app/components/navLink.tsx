import { NavLink as RemixNavLink } from "remix";
import { Trigger } from "@radix-ui/react-tabs";
import styled from "styled-components";

type NavLink = {
  href: string;
  text: string;
  category: string;
};

export default function NavLink({ href, text, category }: NavLink) {
  const isActive = (slug: string, current: string) => {
    return (slug || "") === current;
  };

  return (
    <StyledTrigger
      asChild
      value={href.slice(1)}
      style={{
        "--color": isActive(category, href.slice(1))
          ? "var(--color-yellow)"
          : "inherit",
        "--background": isActive(category, href.slice(1))
          ? "var(--color-brown)"
          : "inherit",
      }}
    >
      <RemixNavLink key={href} to={href}>
        {text}
      </RemixNavLink>
    </StyledTrigger>
  );
}

interface Trigger {
  style: {
    "--color": string;
    "--background": string;
  };
}

const StyledTrigger = styled(Trigger)<Trigger>`
  padding-left: 12px;
  padding-right: 12px;
  background-color: var(--background);

  color: var(--color);
  text-decoration: none;
  font-size: ${18 / 16}rem;
`;

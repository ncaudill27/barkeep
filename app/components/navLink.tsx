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
    return (slug || "") === current.slice(1);
  };

  return (
    <StyledTrigger
      asChild
      value={href.slice(1)}
      style={{
        "--color": isActive(category, href) ? "var(--color-yellow)" : "inherit",
        "--background": isActive(category, href)
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
  padding: 10px 24px;
  background-color: var(--background);

  color: var(--color);
  text-decoration: none;
  font-size: ${18 / 16}rem;
`;

import { NavLink as RemixNavLink } from "remix";
import { Trigger } from "@radix-ui/react-tabs";
import styled from "styled-components";

type NavLink = {
  href: string;
  text: string;
  category: string | undefined;
};

export default function NavLink({ href, text, category }: NavLink) {
  const isActive = (slug: string | undefined, current: string) => {
    return (slug || "") === current;
  };

  return (
    <StyledTrigger
      asChild
      value={href.slice(1)}
      style={{
        "--color": !isActive(category, href.slice(1))
          ? "var(--color-brown-dark)"
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
  };
}

const StyledTrigger = styled(Trigger)<Trigger>`
  padding-left: 12px;
  padding-right: 12px;
  color: var(--color);
  text-decoration: none;
  font-size: ${18 / 16}rem;
`;

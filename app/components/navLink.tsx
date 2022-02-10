import { NavLink as RemixNavLink } from "remix";

import { Trigger } from "./radixTabs";

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
    <Trigger
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
    </Trigger>
  );
}

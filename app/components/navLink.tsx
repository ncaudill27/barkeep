import { NavLink as RemixNavLink } from "remix";

import { Trigger } from "./radixTabs";

type NavLink = {
  href: string;
  text: string;
  current: string;
};

export default function NavLink({ href, text, current }: NavLink) {
  const isActive = (slug: string, target: string) => {
    return slug === target.slice(1);
  };

  return (
    <Trigger
      asChild
      value={href.slice(1)}
      style={{
        "--color": isActive(current, href) ? "var(--color-yellow)" : "inherit",
        "--background": isActive(current, href)
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

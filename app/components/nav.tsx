import React from "react";
import { NavLink, useParams } from "remix";
import { List, Trigger } from "@radix-ui/react-tabs";

import styled from "styled-components";

const links = [
  { href: "/", text: "All" },
  { href: "/gin", text: "Gin" },
  { href: "/agave", text: "Agave" },
  { href: "/whiskey", text: "Whiskey" },
  { href: "/rum", text: "Rum" },
  { href: "/other", text: "Other" },
];

const Nav = () => {
  const params = useParams();
  console.log(params.category);

  const isActive = (slug: string | undefined, current: string) => {
    return (slug || "") === current;
  };

  return (
    <List>
      <Wrapper>
        {links.map(({ href, text }) => (
          <StyledTrigger
            asChild
            value={href.slice(1)}
            style={{
              "--color": isActive(params.category, href.slice(1))
                ? "red"
                : "inherit",
            }}
          >
            <NavLink key={href} to={href}>
              {text}
            </NavLink>
          </StyledTrigger>
        ))}
      </Wrapper>
    </List>
  );
};

const Wrapper = styled.nav`
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 2px;
  margin-bottom: 16px;

  display: flex;
  overflow-x: auto;
`;

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
`;

export default Nav;

import { useParams } from "remix";
import { List } from "@radix-ui/react-tabs";

import styled from "styled-components";
import NavLink from "./navLink";

const links = [
  { href: "/", text: "All" },
  { href: "/gin", text: "Gin" },
  { href: "/agave", text: "Agave" },
  { href: "/rum", text: "Rum" },
  { href: "/whiskey", text: "Whiskey" },
  { href: "/other", text: "Other" },
];

const Nav = () => {
  const { category = "" } = useParams();

  return (
    <List aria-label="Navigate drink categories" asChild>
      <RootWrapper>
        {links.map((link) => (
          <NavLink key={link.href} category={category} {...link} />
        ))}
      </RootWrapper>
    </List>
  );
};

const RootWrapper = styled.nav`
  bottom: 0;
  left: 0;
  padding-top: 8px;
  padding-bottom: 24px;
  margin-left: -16px;

  overflow-x: scroll;
  overflow-y: hidden;
`;

export default Nav;

import { useParams } from "remix";
import { List } from "@radix-ui/react-tabs";

import styled from "styled-components";
import NavLink from "./navLink";

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

  const isActive = (slug: string | undefined, current: string) => {
    return (slug || "") === current;
  };

  return (
    <List>
      <Wrapper>
        {links.map((link) => (
          <NavLink key={link.href} category={params.category} {...link} />
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

export default Nav;

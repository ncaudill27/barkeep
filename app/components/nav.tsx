import { List } from "./radixTabs";
import styled from "styled-components";

import NavLink from "./navLink";
import { motion } from "framer-motion";

const links = [
  { href: "/", text: "All" },
  { href: "gin", text: "Gin" },
  { href: "agave", text: "Agave" },
  { href: "rum", text: "Rum" },
  { href: "whiskey", text: "Whiskey" },
  { href: "other", text: "Other" },
];

type NavProps = {
  category: string;
};

const Nav = ({ category }: NavProps) => {
  const isActive = (current: string, target: string) => {
    return current === target.slice(1);
  };

  return (
    <List aria-label="Navigate drink categories" asChild>
      <RootWrapper layout>
        {links.map((link) => (
          <NavLink
            key={link.href}
            isActive={isActive(category, link.href)}
            {...link}
          />
        ))}
      </RootWrapper>
    </List>
  );
};

const RootWrapper = styled(motion.nav)`
  display: flex;
  padding-top: 12px;
  padding-bottom: 12px;
  margin-left: -16px;
  margin-right: -16px;
  margin-bottom: 24px;

  overflow-x: auto;

  @media (min-width: 600px) {
    margin-left: 0;
    margin-right: 0;
  }
`;

export default Nav;

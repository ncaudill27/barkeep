import { NavLink } from "remix";

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
  const styles = ({ isActive }: any) => ({
    color: isActive ? "red" : "inherit",
    textDecoration: "none",
    paddingLeft: "12px",
    paddingRight: "12px",
  });

  return (
    <Wrapper>
      {links.map(({ href, text }) => (
        <NavLink key={href} to={href} style={styles}>
          {text}
        </NavLink>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  display: flex;
`;

export default Nav;

import { Link } from "remix";
import styled from "styled-components";

const links = ["All", "Gin", "Agave", "Whiskey", "Rum", "Other"];

const Nav = () => {
  return (
    <Wrapper>
      {links.map((link) => (
        <StyledLink to={`/drinks/${link.toLocaleLowerCase()}`}>
          {link}
        </StyledLink>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  display: flex;
`;

const StyledLink = styled(Link)`
  flex: 1;
  padding: 6px;
  text-decoration: none;
  text-align: center;
`;

export default Nav;

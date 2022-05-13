import { Link } from "@remix-run/react";
import styled from "styled-components";

const Header = () => {
  return (
    <Wrapper>
      <Link to="/">Home</Link>
      <Link to="/drinks">Cocktails</Link>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  margin-top: 32px;
  margin-bottom: 32px;

  display: flex;
`;

export default Header;

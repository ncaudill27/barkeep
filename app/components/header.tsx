import styled from "styled-components";
import Heading from "./typography/heading";
import Nav from "./nav";

const Header = () => {
  return (
    <Wrapper>
      <Heading tag="h1">Welcome to Barkeep</Heading>
      <Nav />
    </Wrapper>
  );
};

const Wrapper = styled.header`
  padding: 32px 16px;
`;

export default Header;

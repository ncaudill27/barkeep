import styled from "styled-components";
import Heading from "./typography/heading";

const Header = () => {
  return (
    <Wrapper>
      <Heading tag="h1">Welcome to Barkeep</Heading>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  height: 120px;
  padding: 32px 16px;
`;

export default Header;

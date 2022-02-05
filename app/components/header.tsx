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
  margin-top: 32px;
  margin-bottom: 32px;
`;

export default Header;

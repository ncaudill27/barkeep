import styled from "styled-components";
import Heading from "./heading";

const Header = () => {
  return (
    <Wrapper>
      <Heading tag="h1">
        Barkeep
        <br />
        Journal
      </Heading>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  margin-top: 32px;
  margin-bottom: 32px;
`;

export default Header;

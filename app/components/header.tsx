import styled from "styled-components";
import BaseLink from "./baseLink";

const Header = () => {
  return (
    <Wrapper>
      <BaseLink to="/">Logo</BaseLink>
      <BaseLink to="/drinks">Cocktails</BaseLink>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  margin-top: 32px;
  margin-bottom: 80px;

  display: flex;
  gap: 16px;
`;

export default Header;

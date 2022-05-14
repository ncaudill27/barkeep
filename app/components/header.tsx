import styled from "styled-components";
import BaseLink from "./baseLink";

const Header = () => {
  return (
    <Wrapper>
      <BaseLink to="/">Barkeep Journal</BaseLink>
      <BaseLink to="/drinks">Cocktails</BaseLink>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  margin-top: 32px;
  margin-bottom: 80px;

  display: flex;
  align-items: baseline;
  gap: 32px;
  line-height: 1;

  & :first-of-type {
    font-size: ${32 / 16}rem;
    font-family: var(--font-family-primary);
    font-weight: var(--font-weight-black);
    color: var(--color-brown-darkest);
    margin-bottom: 8px;
  }
`;

export default Header;

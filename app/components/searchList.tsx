import styled from "styled-components";
import { filterBySearch, getDrinkUrl } from "~/drink";
import type { Drink } from "~/drink";
import BaseLink from "./baseLink";

type SearchListProps = {
  drinks: Drink[];
  search: string;
  isOpen: boolean;
};

export default function SearchList({
  drinks,
  search,
  isOpen,
}: SearchListProps) {
  const isVisible = search !== "" && drinks.length !== 0 && isOpen;
  // TODO implement ReachUI combobox
  return (
    <Wrapper
      style={{
        "--display": isVisible ? "block" : "none",
      }}
    >
      {isVisible && (
        <StyledList>
          {filterBySearch(drinks, search).map((d) => (
            <StyledLink key={d.name} to={getDrinkUrl(d)}>
              {d.name}
            </StyledLink>
          ))}
        </StyledList>
      )}
    </Wrapper>
  );
}

type Wrapper = {
  style: {
    "--display": string;
  };
};

const Wrapper = styled.div<Wrapper>`
  display: var(--display);
  padding: 16px;
  width: min(100%, 35ch);
  position: absolute;
  margin-top: -16px;
  background-color: white;
  z-index: 1;
`;

const StyledList = styled.ul`
  padding: 0;
  list-style: none;
`;

const StyledLink = styled(BaseLink)`
  display: block;
  margin-bottom: 4px;
`;

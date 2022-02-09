import styled from "styled-components";
import { filterDrinks } from "~/drink";
import type { Drink } from "~/drink";
import { TextInput } from "./searchInput";
import BaseLink from "./baseLink";

type SearchListProps = {
  drinks: Drink[];
  search: string;
};

export default function SearchList({ drinks, search }: SearchListProps) {
  const isVisible = search !== "" && drinks.length !== 0;

  return (
    <Wrapper
      style={{
        "--display": isVisible ? "block" : "none",
      }}
    >
      {isVisible && (
        <StyledList>
          {filterDrinks(drinks, { search }).map((d) => (
            <SearchLink key={d.name} {...d} />
          ))}
        </StyledList>
      )}
    </Wrapper>
  );
}

const SearchLink = ({ name }: Drink) => (
  <StyledItem>
    <BaseLink to={`/drinks/${name}`}>{name}</BaseLink>
  </StyledItem>
);

type Wrapper = {
  style: {
    "--display": string;
  };
};

const Wrapper = styled.div<Wrapper>`
  display: var(--display);
  padding: 16px;
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
  margin-top: -16px;
  background-color: white;
  z-index: 1;
`;

const StyledList = styled.ul`
  padding: 0;
  list-style: none;
`;

const StyledItem = styled.li`
  margin-bottom: 4px;
`;

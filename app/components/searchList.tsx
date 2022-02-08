import styled from "styled-components";
import { filterDrinks } from "~/drink";
import type { Drink } from "~/drink";
import { TextInput } from "./searchInput";
import { Link } from "remix";
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
      <StyledList>
        {filterDrinks(drinks, { search }).map((d) => (
          <StyledItem>
            <BaseLink to={`/drinks/${d.name}`}>{d.name}</BaseLink>
          </StyledItem>
        ))}
      </StyledList>
    </Wrapper>
  );
}

type Wrapper = {
  style: {
    "--display": string;
  };
};

const Wrapper = styled.div<Wrapper>`
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
  display: var(--display);
  margin-top: -16px;
  padding: 16px;
  background-color: white;
  z-index: 1;

  ${TextInput}:not(:focus) + & {
    display: none;
  }
`;

const StyledList = styled.ul`
  padding: 0;
  list-style: none;
`;

const StyledItem = styled.li`
  margin-bottom: 4px;
`;

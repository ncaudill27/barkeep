import styled from "styled-components";
import { filterDrinks } from "~/drink";
import type { Drink } from "~/drink";
import { TextInput } from "./searchInput";

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
      {filterDrinks(drinks, { search }).map((d) => (
        <div>{d.name}</div>
      ))}
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

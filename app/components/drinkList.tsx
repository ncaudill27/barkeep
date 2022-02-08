import styled from "styled-components";
import type { Drink } from "~/drink";
import BaseLink from "./baseLink";

type DrinkListProps = {
  drinks: Drink[];
};

export default function DrinkList({ drinks }: DrinkListProps) {
  return (
    <StyledList>
      {drinks.map((drink) => (
        <StyledItem key={drink.name}>
          <BaseLink to={`/drinks/${drink.name}`}>{drink.name}</BaseLink>
        </StyledItem>
      ))}
    </StyledList>
  );
}

const StyledList = styled.ul`
  padding: 0;
  padding-bottom: 40px;
  list-style: none;
`;

const StyledItem = styled.li`
  margin-bottom: 4px;
`;

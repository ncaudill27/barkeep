import styled from "styled-components";
import type { Drink } from "~/drink";
import { unsafe___getCategory } from "~/utils/HACK_getCategory";

import BaseLink from "./baseLink";
import Heading from "./heading";
import Flex from "./flex";

type DrinkListProps = {
  drinks: Drink[];
};

export default function DrinkList({ drinks }: DrinkListProps) {
  return (
    <StyledList>
      {drinks.map((drink) => (
        <StyledItem
          key={drink.name}
          to={`/drinks/${unsafe___getCategory(drink.categories)}/${drink.name}`}
        >
          <Heading tag="h3">{drink.name}</Heading>
          <IngredientList wrap>
            {drink.ingredients.map(({ name }) => name).join(", ")}
          </IngredientList>
        </StyledItem>
      ))}
    </StyledList>
  );
}

const StyledList = styled.ul`
  position: relative;
  padding: 0;

  list-style: none;
`;

const StyledItem = styled(BaseLink)`
  display: block;
  margin-right: 70px;
  margin-bottom: 16px;
`;

const IngredientList = styled(Flex)`
  padding: 0;
  max-width: 300px;

  gap: 0 8px;
  list-style: none;
  font-size: ${14 / 16}rem;
`;

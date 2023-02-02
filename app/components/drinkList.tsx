import styled from "styled-components";
import { getDrinkUrl } from "~/drink";
import type { Drink } from "~/drink";

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
        <DrinkLink key={drink.name} to={getDrinkUrl(drink)}>
          <Heading tag="h3">{drink.name}</Heading>
          <IngredientList wrap>
            {drink.ingredients.map(({ name }) => name).join(", ")}
          </IngredientList>
        </DrinkLink>
      ))}
    </StyledList>
  );
}

const StyledList = styled.ul`
  position: relative;
  padding: 0;

  list-style: none;
`;

const DrinkLink = styled(BaseLink)`
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

import styled from "styled-components";
import type { Drink } from "~/drink";
import { parseAmount, parseMeasurement } from "~/utils/parseMeasurements";

import Heading from "~/components/typography/heading";

export default function DrinkComponent({
  name,
  ingredients,
  glassware,
}: Drink) {
  return (
    <div>
      <Heading tag="h2">{name}</Heading>
      <SubHeading tag="h3">Ingredients</SubHeading>
      {ingredients?.map((ingredient) => (
        <Ingredient>
          <Name>{ingredient.name}</Name>
          <div>{parseAmount(ingredient.amount)}</div>
          <div>
            {parseMeasurement(ingredient.measurement, ingredient.amount)}
          </div>
        </Ingredient>
      ))}
      <SubHeading tag="h3">Glassware</SubHeading>
      {glassware.slice(0, 1).toUpperCase() + glassware.slice(1)}
    </div>
  );
}

const SubHeading = styled(Heading)`
  margin-top: 16px;
  margin-bottom: 8px;

  width: fit-content;
  border-bottom: 1px solid;
`;

const Ingredient = styled.div`
  display: flex;
  gap: 4px;
`;

const Name = styled.div`
  margin-right: auto;
`;

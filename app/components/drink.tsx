import styled from "styled-components";
import type { Drink } from "~/drink";

import Heading from "~/components/typography/heading";
import Ingredient from "./ingredient";

export default function DrinkComponent({
  name,
  ingredients,
  glassware,
}: Drink) {
  return (
    <div>
      <Heading tag="h2">{name}</Heading>
      <SubHeading tag="h3">Ingredients</SubHeading>
      {ingredients.map((ingredient) => (
        <Ingredient key={ingredient.name} {...ingredient} />
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

import styled from "styled-components";
import type { Drink } from "~/drink";

import Heading from "~/components/typography/heading";
import Ingredient from "./ingredient";

export default function DrinkComponent({
  name,
  ingredients,
  glassware,
  build,
}: Drink) {
  return (
    <div>
      <Heading tag="h2">{name}</Heading>
      <Subheading>Ingredients</Subheading>
      {ingredients.map((ingredient) => (
        <Ingredient key={ingredient.name} {...ingredient} />
      ))}
      <Subheading>Glassware</Subheading>
      {glassware.slice(0, 1).toUpperCase() + glassware.slice(1)}
      <Subheading>Build</Subheading>
    </div>
  );
}

function Subheading(props: any) {
  return <StyledSubheading tag="h3" {...props} />;
}

const StyledSubheading = styled(Heading)`
  margin-top: 16px;
  margin-bottom: 8px;

  width: fit-content;
  border-bottom: 1px solid;
`;

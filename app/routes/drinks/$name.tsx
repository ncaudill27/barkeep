import { useLoaderData } from "remix";
import type { LoaderFunction } from "remix";
import styled from "styled-components";
import { getDrink } from "~/drink";
import type { Drink } from "~/drink";
import invariant from "tiny-invariant";
import { parseAmount, parseMeasurement } from "~/utils/parseMeasurements";

import Heading from "~/components/typography/heading";

export const loader: LoaderFunction = ({ params }) => {
  invariant(params.name, "Expected params.name");
  return getDrink(params.name);
};

export default function Drink() {
  const drink = useLoaderData<Drink>();
  console.log(drink);

  return (
    <div>
      <Heading tag="h2">{drink.name}</Heading>
      <SubHeading tag="h3">Ingredients</SubHeading>
      {drink.ingredients.map((ingredient) => (
        <Ingredient>
          <Name>{ingredient.name}</Name>
          <div>{parseAmount(ingredient.amount)}</div>
          <div>
            {parseMeasurement(ingredient.measurement, ingredient.amount)}
          </div>
        </Ingredient>
      ))}
      <SubHeading tag="h3">Glassware</SubHeading>
      {drink.glassware.slice(0, 1).toUpperCase() + drink.glassware.slice(1)}
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

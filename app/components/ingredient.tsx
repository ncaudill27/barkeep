import styled from "styled-components";

import { parseAmount, parseMeasurement } from "~/utils/parseMeasurements";

type IngredientProps = {
  name: string;
  amount: string;
  measurement: string;
};

export default function Ingredient({
  name,
  amount,
  measurement,
  ...props
}: IngredientProps) {
  return (
    <StyledIngredient {...props}>
      <Name>{name}</Name>
      <div>{parseAmount(amount)}</div>
      <div>{parseMeasurement(measurement, amount)}</div>
    </StyledIngredient>
  );
}

const StyledIngredient = styled.div`
  display: flex;
  gap: 4px;
`;

const Name = styled.div`
  margin-right: auto;
`;

import styled from "styled-components";
import type { Ingredient } from "~/drink";

import { parseAmount, parseMeasurement } from "~/utils/parseMeasurements";

export default function Ingredient({
  name,
  amount,
  measurement,
  ...props
}: Ingredient) {
  return (
    <StyledIngredient {...props}>
      <Name>{name}</Name>
      <span>{amount && parseAmount(amount)}</span>
      <span>{amount && parseMeasurement(measurement, amount)}</span>
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

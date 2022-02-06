import styled from "styled-components";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";

import Flex from "./flex";

export default function FilterRadio() {
  return (
    <form>
      <RadioGroup defaultValue="default" aria-label="View density">
        <Flex align="center" gap={0}>
          <RadioGroupRadio value="default" id="r1">
            <RadioGroupIndicator />
          </RadioGroupRadio>
          <Label htmlFor="r1">Default</Label>
        </Flex>
        <Flex align="center" gap={0}>
          <RadioGroupRadio value="comfortable" id="r2">
            <RadioGroupIndicator />
          </RadioGroupRadio>
          <Label htmlFor="r2">Comfortable</Label>
        </Flex>
        <Flex align="center" gap={0}>
          <RadioGroupRadio value="compact" id="r3">
            <RadioGroupIndicator />
          </RadioGroupRadio>
          <Label htmlFor="r3">Compact</Label>
        </Flex>
      </RadioGroup>
    </form>
  );
}

const StyledRadio = styled(RadioGroupPrimitive.Item)`
  all: unset;
  background-color: white;
  width: 25px;
  height: 25px;
  border-radius: 100%;
  &:hover: {
    background-color: var(--color-cream);
  }
  &:focus: {
    box-shadow: 0 0 0 2px var(--color-orange);
  }
`;

const StyledIndicator = styled(RadioGroupPrimitive.Indicator)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  position: relative;
  &:after {
    content: "";
    display: block;
    width: 11px;
    height: 11px;
    border-radius: 50%;
    background-color: var(--color-brown);
  }
`;

const RadioGroup = styled(RadioGroupPrimitive.Root)`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const RadioGroupRadio = StyledRadio;
const RadioGroupIndicator = StyledIndicator;

const Label = styled.label`
  color: white;
  font-size: 15;
  line-height: 1;
  user-select: none;
  padding-left: 15;
`;

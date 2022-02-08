import styled from "styled-components";
import { Form } from "remix";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";

import Flex from "./flex";

export default function FilterRadio() {
  return (
    <Form method="get">
      <RadioGroup
        name="build-style"
        defaultValue="all"
        aria-label="View density"
      >
        <Flex align="center" gap={0}>
          <RadioGroupRadio value="all" id="r1">
            <RadioGroupIndicator />
          </RadioGroupRadio>
          <Label htmlFor="r1">All</Label>
        </Flex>
        <Flex align="center" gap={0}>
          <RadioGroupRadio value="shaken" id="r2">
            <RadioGroupIndicator />
          </RadioGroupRadio>
          <Label htmlFor="r2">Shaken</Label>
        </Flex>
        <Flex align="center" gap={0}>
          <RadioGroupRadio value="stirred" id="r3">
            <RadioGroupIndicator />
          </RadioGroupRadio>
          <Label htmlFor="r3">Stirred</Label>
        </Flex>
        <StyledButton type="submit">Filter</StyledButton>
      </RadioGroup>
    </Form>
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
  &:focus {
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
  color: inherit;
  font-size: 15;
  line-height: 1;
  user-select: none;
  padding-left: 15;
`;

const StyledButton = styled.button`
  all: unset;
  display: block;
  margin-top: 12px;
  margin-left: -8px;
  margin-right: -8px;
  padding-top: 4px;
  padding-bottom: 4px;

  border-radius: 5px;
  border-top-right-radius: 2px;
  border-top-left-radius: 2px;

  text-align: center;
  background-color: white;
  color: var(--color-brown);

  &:focus {
    box-shadow: 0 0 0 2px var(--color-orange);
  }
`;

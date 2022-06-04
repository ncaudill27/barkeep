import * as PopoverPrimitive from "@radix-ui/react-popover";
import styled from "styled-components";

export const Popover = PopoverPrimitive.Root;
export const Trigger = PopoverPrimitive.Trigger;

export const Content = styled(PopoverPrimitive.Content)`
  padding: 24px 16px;
  padding-bottom: 8px;
  background-color: var(--color-brown);
  color: white;
  border: 2px solid var(--color-yellow);
  border-radius: 10px;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;

  &:focus {
    outline: 2px solid var(--color-orange);
  }
`;

export const CloseButton = styled(PopoverPrimitive.Close)`
  all: unset;
  border-radius: 50%;
  height: 25px;
  width: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: inherit;
  position: absolute;
  top: 5px;
  right: 5px;

  &:hover {
    background-color: var(--color-brown);
  }
  &:focus {
    outline: 2px solid var(--color-orange);
  }
`;

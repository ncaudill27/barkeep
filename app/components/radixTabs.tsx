import * as TabPrimitives from "@radix-ui/react-tabs";
import styled from "styled-components";

export const Root = styled(TabPrimitives.Root)`
  position: relative;
  z-index: 1;
`;
export const List = TabPrimitives.List;
export const Content = styled(TabPrimitives.Content)`
  position: relative;
  max-width: 546px;
`;

export const Trigger = styled(TabPrimitives.Trigger)`
  position: relative;

  padding: 10px 24px;

  color: inherit;
  background-color: inherit;
  text-decoration: none;
  border-bottom: 2px solid var(--color-brown);

  font-size: ${18 / 16}rem;
`;

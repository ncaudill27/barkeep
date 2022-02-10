import * as TabPrimitives from "@radix-ui/react-tabs";
import styled from "styled-components";

export const Root = styled(TabPrimitives.Root)`
  position: relative;
  z-index: 1;
`;
export const List = TabPrimitives.List;
export const Content = TabPrimitives.Content;

interface Trigger {
  style: {
    "--color": string;
    "--background": string;
  };
}

export const Trigger = styled(TabPrimitives.Trigger)<Trigger>`
  padding: 10px 24px;
  background-color: var(--background);

  color: var(--color);
  text-decoration: none;
  font-size: ${18 / 16}rem;
  border-bottom: 2px solid var(--color-brown);
`;

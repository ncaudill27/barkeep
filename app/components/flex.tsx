import React from "react";
import styled from "styled-components";

type Justify =
  | "flex-start"
  | "flex-end"
  | "center"
  | "space-between"
  | "space-around"
  | "space-evenly";

type Align =
  | "flex-start"
  | "flex-end"
  | "center"
  | "stretch"
  | "baseline"
  | "space-evenly";

type FlexProps = {
  justify?: Justify;
  align?: Align;
  gap?: number;
  stack?: boolean;
  wrap?: boolean;
  children: React.ReactNode;
};

export default function Flex({
  justify,
  align,
  gap,
  stack,
  wrap,
  ...props
}: FlexProps) {
  return (
    <StyledFlex
      style={{
        "--justify": justify,
        "--align": align,
        "--gap": `var(--spacing-${gap})`,
        "--direction": stack ? "column" : "row",
        "--wrap": wrap ? "wrap" : "nowrap",
      }}
      {...props}
    />
  );
}

interface Flex {
  style: {
    "--justify"?: string;
    "--align"?: string;
    "--gap"?: string;
    "--direction"?: string;
    "--wrap"?: string;
  };
}

const StyledFlex = styled.div<Flex>`
  display: flex;
  flex-direction: var(--direction);
  flex-wrap: var(--wrap);
  justify-content: var(--justify);
  align-items: var(--align);
  gap: var(--gap);
`;

type FlexChildProps = {
  flex: string | number;
  children: React.ReactChild | React.ReactChild[];
};

Flex.FlexChild = ({ flex, ...props }: FlexChildProps) => {
  return (
    <StyledFlexChild
      style={{
        "--flex": flex,
      }}
      {...props}
    />
  );
};

interface FlexChild {
  style: {
    "--flex": string | number;
  };
}

const StyledFlexChild = styled.div<FlexChild>`
  flex: var(--flex);
`;

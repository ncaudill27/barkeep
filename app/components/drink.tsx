import React, { useContext, useState } from "react";
import styled from "styled-components";
import { BatchContext } from "~/routes/batch";
import * as Slider from "@radix-ui/react-slider";
import type { Drink } from "~/drink";

import Heading from "./heading";
import Flex from "./flex";
import Ingredient from "./ingredient";
import BuildPortableText from "./buildPortableText";

export default function DrinkComponent({
  name,
  ingredients,
  glassware,
  garnish,
  build,
}: Drink) {
  return (
    <ShowWrapper>
      <MainHeading view="show" name={name} />
      <Subheading>Ingredients</Subheading>
      {ingredients.map((ingredient) => (
        <Ingredient key={ingredient.name} {...ingredient} />
      ))}
      <Flex justify="space-between">
        {glassware && (
          <Flex.FlexChild flex="1">
            <Subheading>Glassware</Subheading>
            {glassware.slice(0, 1).toUpperCase() + glassware.slice(1)}
          </Flex.FlexChild>
        )}
        {garnish && (
          <Flex.FlexChild flex="1">
            <Subheading>Garnish</Subheading>
            {garnish}
          </Flex.FlexChild>
        )}
      </Flex>
      {build && build.length > 0 && (
        <>
          <Subheading>Build</Subheading>
          <BuildPortableText value={build} />
        </>
      )}
    </ShowWrapper>
  );
}

export function BatchDrink({ name, ingredients }: Drink) {
  const batchSize = useContext(BatchContext);

  return (
    <BatchWrapper>
      <MainHeading view="batch" name={name} />
      <Subheading>Ingredients</Subheading>
      {ingredients.map((ingredient) => (
        <Ingredient key={ingredient.name} {...ingredient} />
      ))}
      <BatchSlider
        onValueChange={(value) =>
          // TODO update single batched drink here
          console.log("\n#####\n", "VALUE: ", value, "\n#####\n")
        }
        defaultValue={[batchSize]}
        min={1}
        max={50}
        step={1}
        onv
      />
    </BatchWrapper>
  );
}

// TODO probably remove forwardRef
const BatchSlider = React.forwardRef((props, forwardedRef) => {
  const value = props.value || props.defaultValue;
  console.log("\n#####\n", "VALUE: ", value, "\n#####\n");
  return (
    <StyledSlider {...props} ref={forwardedRef}>
      <Track>
        <Range />
      </Track>
      <Thumb />
    </StyledSlider>
  );
});

const ShowWrapper = styled.div`
  max-width: 400px;
  margin-top: 80px;
  padding-bottom: 40px;
`;

const BatchWrapper = styled.div`
  max-width: 400px;
  padding: 32px;
  border-radius: 2px;
  border: 2px solid var(--color-brown);
`;

const StyledSlider = styled(Slider.Root)`
  position: relative;
  display: flex;
  align-items: center;
  user-select: none;
  touch-action: none;
  width: 200px;

  &[data-orientation="horizontal"] {
    height: 20px;
  }
`;

const Track = styled(Slider.Track)`
  background-color: var(--color-pink);
  position: relative;
  flex-grow: 1;
  border-radius: 50%;

  &[data-orientation="horizontal"] {
    height: 3px;
  }
`;

const Range = styled(Slider.Range)`
  position: absolute;
  background-color: var(--color-brown-light);
  border-radius: 50%;
  height: 100%;
`;

const Thumb = styled(Slider.Thumb)`
  display: block;
  width: 20px;
  height: 20px;
  background-color: var(--color-brown);
  border: 2px solid var(--color-yellow);
  border-radius: 10px;
`;

function MainHeading({ view, name }: { view: "show" | "batch"; name: string }) {
  switch (view) {
    case "batch":
      return <Heading tag="h2">{name}</Heading>;
    default:
      return <Heading tag="h1">{name}</Heading>;
  }
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

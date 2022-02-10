import styled from "styled-components";
import type { Drink } from "~/drink";

import Heading from "./heading";
import Flex, { FlexChild } from "./flex";
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
    <Wrapper>
      <Heading tag="h2">{name}</Heading>
      <Subheading>Ingredients</Subheading>
      {ingredients.map((ingredient) => (
        <Ingredient key={ingredient.name} {...ingredient} />
      ))}
      <Flex justify="space-between">
        {glassware && (
          <FlexChild flex="1">
            <Subheading>Glassware</Subheading>
            {glassware.slice(0, 1).toUpperCase() + glassware.slice(1)}
          </FlexChild>
        )}
        {garnish && (
          <FlexChild flex="1">
            <Subheading>Garnish</Subheading>
            {garnish}
          </FlexChild>
        )}
      </Flex>
      {build && build.length > 0 && (
        <>
          <Subheading>Build</Subheading>
          <BuildPortableText value={build} />
        </>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  max-width: 400px;
  padding-bottom: 40px;
`;

function Subheading(props: any) {
  return <StyledSubheading tag="h3" {...props} />;
}

const StyledSubheading = styled(Heading)`
  margin-top: 16px;
  margin-bottom: 8px;

  width: fit-content;
  border-bottom: 1px solid;
`;

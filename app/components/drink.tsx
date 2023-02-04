import styled from "styled-components";
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
  view = "show",
}: Drink & { view: "show" | "batch" }) {
  let Wrapper = ShowWrapper;
  if (view === "batch") {
    Wrapper = BatchWrapper;
  }

  return (
    <Wrapper>
      <MainHeading view={view} name={name} />
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
    </Wrapper>
  );
}

const ShowWrapper = styled.div`
  max-width: 400px;
  margin-top: 80px;
  padding-bottom: 40px;
`;

const BatchWrapper = styled.div`
  max-width: 400px;
  padding-bottom: 24px;
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

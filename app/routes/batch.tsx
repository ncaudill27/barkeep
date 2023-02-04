import { useState } from "react";
import styled from "styled-components";
import { useLoaderData } from "@remix-run/react";
import { filterBySearch, getDrinks } from "~/drink";
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
  ComboboxOptionText,
} from "@reach/combobox";
import type { LoaderFunction, MetaFunction } from "@remix-run/node";
import type { Drink } from "~/drink";
import { BatchedRecipe, useBatch } from "~/hooks";

import { ThickHeading } from "~/components/heading";
import DrinkComponent from "~/components/drink";

export const meta: MetaFunction = () => {
  return {
    title: `Batch Calculator`,
  };
};
export const loader: LoaderFunction = async () => {
  const drinks = await getDrinks();

  return drinks;
};

export default function Batch() {
  const drinks = useLoaderData<typeof loader>();
  const [search, setSearch] = useState("");
  const [batch, setBatch] = useState<Drink[]>([]);
  const [batchSize, setBatchSize] = useState();
  const handleSearch = (e: any) => setSearch(e.target.value);
  const handleBatchSize = (e: any) => setBatchSize(e.target.value);
  const handleSelect = (drinkName: string) => {
    const drink = filterBySearch(drinks, drinkName)[0];
    setBatch((prev) => [...prev, drink]);
  };
  // TODO
  const updateBatchSize = (recipe: BatchedRecipe) => {
    // update batchsize on single recipe with slider
  };
  const batchedDrinks = useBatch(batch, batchSize);

  return (
    <>
      <ThickHeading tag="h1">You want how many?</ThickHeading>
      <p>We get it math is hard.</p>
      <p>
        Use our Batch Calculator&#8482;&#42; and spend more time drinking or
        whatever.
      </p>
      <InputWrapper>
        <StyledLabel>
          Add recipe
          <StyledComboBox openOnFocus onSelect={handleSelect}>
            <StyledComboInput
              selectOnClick
              autoComplete="false"
              onChange={handleSearch}
              placeholder="Search recipe to batch"
            />
            <StyledPopover>
              <StyledList>
                {filterBySearch(drinks, search).map(({ name }) => (
                  <StyledOption value={name}>
                    <ComboboxOptionText />
                  </StyledOption>
                ))}
              </StyledList>
            </StyledPopover>
          </StyledComboBox>
        </StyledLabel>
        <StyledLabel style={{ flexShrink: 3 }}>
          Count'em
          <BatchSizeInput
            type="number"
            value={batchSize}
            min={1}
            onChange={handleBatchSize}
            placeholder="Serving size"
          />
        </StyledLabel>
      </InputWrapper>
      {batchedDrinks.map((drink) => (
        <DrinkComponent key={drink.name} view="batch" {...drink} />
      ))}
    </>
  );
}

const InputWrapper = styled.div`
  margin-top: 40px;
  margin-bottom: 40px;
`;

const StyledComboBox = styled(Combobox)`
  [data-reach-combobox-option][data-highlighted] {
    background-color: red;
  }
`;

const StyledList = styled(ComboboxList)`
  margin-left: -1px;
  margin-right: -1px;
  padding-top: 8px;
  padding-right: 4px;
  padding-bottom: 8px;
  padding-left: 28px;

  max-height: 30vh;
  background-color: var(--color-cream-light);
  overflow-y: auto;

  border: 2px solid var(--color-brown);
  border-top: 0;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const StyledLabel = styled.label`
  display: inline-block;
`;

const StyledComboInput = styled(ComboboxInput)`
  padding-left: 8px;
  height: 44px;

  border: 1px solid var(--color-brown);
  border-radius: 0px;
  background-color: var(--color-cream);
  color: var(--color-brown);

  &:focus {
    box-shadow: 0 0 0 1px var(--color-brown);
    background-color: var(--color-cream-light);
  }

  &::placeholder {
    font-weight: 400;
    color: var(--color-brown-light-transparent);
  }
`;

const StyledPopover = styled(ComboboxPopover)``;

const StyledOption = styled(ComboboxOption)`
  /* not doing anything */
`;

const BatchSizeInput = styled.input`
  display: block;
  padding-left: 8px;
  height: 44px;

  border: 1px solid var(--color-brown);
  border-radius: 0px;
  background-color: var(--color-cream);
  color: var(--color-brown);

  &:focus {
    box-shadow: 0 0 0 1px var(--color-brown);
    background-color: var(--color-cream-light);
  }

  &::placeholder {
    font-weight: 400;
    color: var(--color-brown-light-transparent);
  }
`;

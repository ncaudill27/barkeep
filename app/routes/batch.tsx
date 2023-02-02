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
import type { LoaderFunction } from "@remix-run/node";
import type { Drink } from "~/drink";
import { useBatch } from "~/hooks";

export const loader: LoaderFunction = async () => {
  const drinks = await getDrinks();

  return drinks;
};

export default function Batch() {
  const drinks = useLoaderData<typeof loader>();
  const [search, setSearch] = useState("");
  const handleChange = (e: any) => setSearch(e.target.value);

  const [batch, setBatch] = useState<Drink[]>([]);

  const batchedDrinks = useBatch(batch, 10);

  return (
    <>
      <Combobox
        openOnFocus
        onSelect={(drinkName) => {
          const drink = filterBySearch(drinks, drinkName)[0];
          setBatch((prev) => [...prev, drink]);
          setSearch("");
        }}
      >
        <StyledComboInput
          selectOnClick
          autoComplete="false"
          onChange={handleChange}
          placeholder="Search recipe to batch"
        />
        <StyledPopover>
          <StyledList>
            {filterBySearch(drinks, search).map(({ name }) => (
              <ComboboxOption value={name}>
                <ComboboxOptionText />
              </ComboboxOption>
            ))}
          </StyledList>
        </StyledPopover>
      </Combobox>
      {batchedDrinks.map(({ name, ingredients }) => (
        <>
          <div>{name}</div>
          <ul>
            {ingredients.map(({ name, amount, measurement }) => (
              <li>
                {name}: {amount} {measurement}
              </li>
            ))}
          </ul>
        </>
      ))}
    </>
  );
}

const StyledPopover = styled(ComboboxPopover)``;

const StyledList = styled(ComboboxList)`
  padding-left: 24px;
`;

const StyledComboInput = styled(ComboboxInput)`
  gap: 8px;
  width: min(546px, 100%);
  margin-bottom: 40px;
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

  /* remove WebKit icons */
  &::-webkit-search-decoration,
  &::-webkit-search-cancel-button,
  &::-webkit-search-results-button,
  &::-webkit-search-results-decoration {
    display: none;
  }
`;

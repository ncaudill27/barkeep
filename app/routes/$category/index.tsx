import { useLoaderData } from "remix";
import type { LoaderFunction } from "remix";
import { getDrinksByCategory } from "~/drink";
import type { Drink } from "~/drink";
import invariant from "tiny-invariant";

import DrinkList from "~/components/drinkList";
import FilterPopover from "~/components/filterPopover";

export const loader: LoaderFunction = ({ params }) => {
  invariant(params.category, "Expected params.category");
  return getDrinksByCategory(params.category);
};

export default function Drink() {
  const drinks = useLoaderData<Drink[]>();

  return (
    <>
      <FilterPopover />
      <DrinkList drinks={drinks} />
    </>
  );
}

import { redirect, useLoaderData } from "remix";
import type { LoaderFunction } from "remix";
import { getDrinksByCategory, getFilterOptionsFromSearch } from "~/drink";
import type { Drink } from "~/drink";
import invariant from "tiny-invariant";

import DrinkList from "~/components/drinkList";
import FilterPopover from "~/components/filterPopover";

export const loader: LoaderFunction = ({ params, request }) => {
  invariant(params.category, "Expected params.category");
  const { buildStyle } = getFilterOptionsFromSearch(request);

  if (buildStyle === "all") {
    return redirect(`/${params.category}`);
  }

  return getDrinksByCategory({ category: params.category, buildStyle });
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

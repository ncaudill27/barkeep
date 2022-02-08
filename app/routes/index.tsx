import { redirect, useLoaderData, useSearchParams } from "remix";
import { getDrinks, getFilterOptionsFromSearch } from "~/drink";
import type { Drink } from "~/drink";
import type { LoaderFunction } from "remix";

import DrinkList from "~/components/drinkList";
import FilterPopover from "~/components/filterPopover";

export const loader: LoaderFunction = ({ request }) => {
  const filterOptions = getFilterOptionsFromSearch(request);

  if (filterOptions.buildStyle === "all") {
    return redirect("/");
  }

  return getDrinks(filterOptions);
};

export default function Index() {
  const drinks = useLoaderData<Drink[]>();
  const [params] = useSearchParams();
  console.log(params.get("build-style"));

  return (
    <>
      <FilterPopover />
      <DrinkList drinks={drinks} />
    </>
  );
}

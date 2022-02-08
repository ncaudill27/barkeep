import { Form, useLoaderData, useSearchParams } from "remix";
import { getDrinks, filterDrinks } from "~/drink";
import type { Drink } from "~/drink";
import type { LoaderFunction } from "remix";

import DrinkList from "~/components/drinkList";
import FilterPopover from "~/components/filterPopover";
import Search from "~/components/search";

export const loader: LoaderFunction = () => {
  return getDrinks();
};

export default function Index() {
  const drinks = useLoaderData<Drink[]>();
  const [params] = useSearchParams();
  const buildStyle = params.get("build-style");
  const search = params.get("search");

  return (
    <>
      <Search drinks={drinks} />
      <FilterPopover />
      <DrinkList drinks={filterDrinks(drinks, { buildStyle, search })} />
    </>
  );
}

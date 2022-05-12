import { useLoaderData } from "@remix-run/react";
import { getDrinks, filterDrinks } from "~/drink";
import type { LoaderFunction } from "@remix-run/node";

import DrinkList from "~/components/drinkList";
import Search from "~/components/search";

export const loader: LoaderFunction = async ({ request }) => {
  const url = new URL(request.url);
  const searchValues = Object.fromEntries(url.searchParams.entries());
  const drinks = await getDrinks();

  return {
    drinks,
    searchValues: { ...searchValues, buildStyle: searchValues["build-style"] },
  };
};

export default function Index() {
  const {
    drinks,
    searchValues: { buildStyle, search },
  } = useLoaderData();

  return (
    <>
      <Search drinks={drinks} />
      <DrinkList drinks={filterDrinks(drinks, { buildStyle, search })} />
    </>
  );
}

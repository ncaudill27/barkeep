import { useLoaderData } from "@remix-run/react";
import type { LoaderFunction, MetaFunction } from "@remix-run/node";
import { getDrinks, filterDrinks } from "~/drink";
import type { Drink } from "~/drink";

import DrinkList from "~/components/drinkList";

export const meta: MetaFunction = () => {
  return {
    title: `All drinks`,
  };
};

export const loader: LoaderFunction = async ({ request, params }) => {
  const url = new URL(request.url);
  const searchValues = Object.fromEntries(url.searchParams.entries());

  const drinks = await getDrinks();

  return {
    drinks,
    searchValues: { ...searchValues, buildStyle: searchValues["build-style"] },
  };
};

export default function Drink() {
  const {
    drinks,
    searchValues: { buildStyle },
  } = useLoaderData();

  return <DrinkList drinks={filterDrinks(drinks, { buildStyle })} />;
}

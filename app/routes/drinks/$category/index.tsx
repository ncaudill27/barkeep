import { useLoaderData } from "@remix-run/react";
import type { LoaderFunction, MetaFunction } from "@remix-run/node";
import { getDrinksByCategory, filterDrinks } from "~/drink";
import type { Drink } from "~/drink";
import invariant from "tiny-invariant";

import DrinkList from "~/components/drinkList";

export const meta: MetaFunction = ({ params }) => {
  invariant(params.category, "Expected params.category");
  const category =
    params.category.slice(0, 1).toUpperCase() + params.category.slice(1);
  return {
    title: `${category} drinks`,
  };
};

export const loader: LoaderFunction = async ({ request, params }) => {
  invariant(params.category, "Expected params.category");

  const url = new URL(request.url);
  const searchValues = Object.fromEntries(url.searchParams.entries());

  const drinks = await getDrinksByCategory(params.category);

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

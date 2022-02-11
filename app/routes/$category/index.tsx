import { MetaFunction, useLoaderData, useSearchParams } from "remix";
import type { LoaderFunction } from "remix";
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

export const loader: LoaderFunction = ({ params }) => {
  invariant(params.category, "Expected params.category");
  return getDrinksByCategory(params.category);
};

export default function Drink() {
  const drinks = useLoaderData<Drink[]>();
  const [params] = useSearchParams();
  const buildStyle = params.get("build-style");

  return <DrinkList drinks={filterDrinks(drinks, { buildStyle })} />;
}

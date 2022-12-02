import { useLoaderData } from "@remix-run/react";
import type { LoaderFunction, MetaFunction } from "@remix-run/node";
import { getDrinksByCategory } from "~/drink";
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

  return await getDrinksByCategory(params.category, request);
};

export default function Drink() {
  const drinks = useLoaderData();

  return <DrinkList drinks={drinks} />;
}

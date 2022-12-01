import { useLoaderData } from "@remix-run/react";
import type { LoaderFunction, MetaFunction } from "@remix-run/node";
import { getDrinks } from "~/drink";
import type { Drink } from "~/drink";

import DrinkList from "~/components/drinkList";

export const meta: MetaFunction = () => {
  return {
    title: `All drinks`,
  };
};

export const loader: LoaderFunction = async ({ request }) => {
  const drinks = await getDrinks(request);

  return drinks;
};

export default function Drink() {
  const drinks = useLoaderData<typeof loader>();

  return <DrinkList drinks={drinks} />;
}

import { useLoaderData, MetaFunction } from "remix";
import type { LoaderFunction } from "remix";
import { getDrink } from "~/drink";
import type { Drink } from "~/drink";
import invariant from "tiny-invariant";

import DrinkComponent from "~/components/drink";

export const meta: MetaFunction = ({ params }) => {
  invariant(params.name, "Expected params.name");
  const name = params.name.slice(0, 1).toUpperCase() + params.name.slice(1);
  return {
    title: name,
  };
};

export const loader: LoaderFunction = ({ params }) => {
  invariant(params.name, "Expected params.name");
  return getDrink(params.name);
};

export default function Drink() {
  const drink = useLoaderData<Drink>();

  return <DrinkComponent {...drink} />;
}

import { useLoaderData } from "remix";
import type { LoaderFunction } from "remix";
import { getDrink } from "~/drink";
import type { Drink } from "~/drink";
import invariant from "tiny-invariant";

import Heading from "~/components/typography/heading";

export const loader: LoaderFunction = ({ params }) => {
  invariant(params.name, "expected params.name");
  return getDrink(params.name);
};

export default function Drink() {
  const drink = useLoaderData<Drink>();

  return (
    <div>
      <Heading tag="h1">{drink.name}</Heading>
    </div>
  );
}

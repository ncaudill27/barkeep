import { useLoaderData } from "remix";
import type { LoaderFunction } from "remix";
import { getDrink } from "~/drink";
import type { Drink } from "~/drink";
import invariant from "tiny-invariant";

import PrimaryHeading from "~/components/typography/primaryH";

export const loader: LoaderFunction = async ({ params }) => {
  invariant(params.name, "expected params.name");
  return getDrink(params.name);
};

export default function Drink() {
  const drink = useLoaderData<Drink>();

  return (
    <div>
      <PrimaryHeading>{drink.name}</PrimaryHeading>
    </div>
  );
}

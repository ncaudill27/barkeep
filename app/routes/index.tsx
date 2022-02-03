import { Link, useLoaderData } from "remix";
import { getDrinks } from "~/drink";
import type { Drink } from "~/drink";

import Heading from "~/components/typography/heading";

export const loader = async () => {
  return getDrinks();
};

export default function Index() {
  const drinks = useLoaderData<Drink[]>();

  return (
    <div>
      <Heading tag="h2">Drinks</Heading>
      <ul>
        {drinks.map((drink) => (
          <li key={drink.name}>
            <Link to={`/drinks/${drink.name}`}>{drink.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

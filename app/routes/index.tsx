import { Link, useLoaderData } from "remix";
import { getDrinks } from "~/drink";
import type { Drink } from "~/drink";

export const loader = async () => {
  return getDrinks();
};

export default function Index() {
  const drinks = useLoaderData<Drink[]>();

  return (
    <div>
      <h1>Drinks</h1>
      <ul>
        {drinks.map((drink) => (
          <li key={drink.name}>
            <Link to={drink.name}>{drink.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

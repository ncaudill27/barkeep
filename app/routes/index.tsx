import { Link, useLoaderData } from "remix";
import { getDrinks } from "~/drink";
import type { Drink } from "~/drink";
import type { LoaderFunction } from "remix";

export const loader: LoaderFunction = async () => {
  return getDrinks();
};

export default function Index() {
  const drinks = useLoaderData<Drink[]>();

  return (
    <div>
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

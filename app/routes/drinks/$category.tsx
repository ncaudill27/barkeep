import { useLoaderData, Link } from "remix";
import type { LoaderFunction } from "remix";
import { getDrinksByCategory } from "~/drink";
import type { Drink } from "~/drink";
import invariant from "tiny-invariant";

export const loader: LoaderFunction = ({ params }) => {
  console.log(params);

  invariant(params.category, "expected params.category");
  return getDrinksByCategory(params.category);
};

export default function Drink() {
  const drinks = useLoaderData<Drink[]>();

  return (
    <div>
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

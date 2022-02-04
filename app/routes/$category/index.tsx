import { useLoaderData, Link, useParams } from "remix";
import type { LoaderFunction } from "remix";
import { getDrinksByCategory } from "~/drink";
import type { Drink } from "~/drink";
import invariant from "tiny-invariant";

export const loader: LoaderFunction = ({ params }) => {
  invariant(params.category, "Expected params.category");
  return getDrinksByCategory(params.category);
};

export default function Drink() {
  const drinks = useLoaderData<Drink[]>();
  const { category } = useParams();
  console.log(category);

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

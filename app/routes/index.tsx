import { useLoaderData } from "remix";
import { getDrinks } from "~/drink";
import type { Drink } from "~/drink";
import type { LoaderFunction } from "remix";
import DrinkList from "~/components/drinkList";

export const loader: LoaderFunction = () => {
  return getDrinks();
};

export default function Index() {
  const drinks = useLoaderData<Drink[]>();

  return <DrinkList drinks={drinks} />;
}

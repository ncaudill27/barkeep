import { useLoaderData, useSearchParams } from "remix";
import { getDrinks } from "~/drink";
import type { Drink } from "~/drink";
import type { LoaderFunction, ActionFunction } from "remix";
import DrinkList from "~/components/drinkList";
import FilterPopover from "~/components/filterPopover";

export const loader: LoaderFunction = ({ request }) => {
  const url = new URL(request.url);
  const searchParams = new URLSearchParams(url.search);
  console.log(searchParams.get("filter"));

  return getDrinks();
};

export default function Index() {
  const drinks = useLoaderData<Drink[]>();
  const [params] = useSearchParams();

  return (
    <>
      <FilterPopover />
      <DrinkList drinks={drinks} />
    </>
  );
}

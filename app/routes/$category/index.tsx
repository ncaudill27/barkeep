import { useLoaderData, useParams } from "remix";
import type { LoaderFunction } from "remix";
import { getDrinksByCategory } from "~/drink";
import type { Drink } from "~/drink";
import invariant from "tiny-invariant";

import DrinkList from "~/components/drinkList";
import { Content } from "@radix-ui/react-tabs";

export const loader: LoaderFunction = ({ params }) => {
  invariant(params.category, "Expected params.category");
  return getDrinksByCategory(params.category);
};

export default function Drink() {
  const drinks = useLoaderData<Drink[]>();
  const params = useParams();

  return (
    <Content value={params.category || ""}>
      <DrinkList drinks={drinks} />
    </Content>
  );
}

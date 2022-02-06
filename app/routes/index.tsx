import { useLoaderData } from "remix";
import { getDrinks } from "~/drink";
import type { Drink } from "~/drink";
import type { LoaderFunction } from "remix";
import DrinkList from "~/components/drinkList";
import { Content } from "@radix-ui/react-tabs";

export const loader: LoaderFunction = () => {
  return getDrinks();
};

export default function Index() {
  const drinks = useLoaderData<Drink[]>();

  return (
    <Content value="">
      <DrinkList drinks={drinks} />
    </Content>
  );
}

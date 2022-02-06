import { useLoaderData, useParams } from "remix";
import type { LoaderFunction } from "remix";
import { getDrink } from "~/drink";
import type { Drink } from "~/drink";
import invariant from "tiny-invariant";

import DrinkComponent from "~/components/drink";
import { Content } from "@radix-ui/react-tabs";

export const loader: LoaderFunction = ({ params }) => {
  invariant(params.name, "Expected params.name");
  return getDrink(params.name);
};

export default function Drink() {
  const drink = useLoaderData<Drink>();
  const { category = "" } = useParams();

  return (
    <Content value={category}>
      <DrinkComponent {...drink} />
    </Content>
  );
}

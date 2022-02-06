import { useLoaderData, useParams } from "remix";
import type { LoaderFunction } from "remix";
import { getDrink } from "~/drink";
import type { Drink } from "~/drink";
import invariant from "tiny-invariant";

import { Content } from "@radix-ui/react-tabs";
import DrinkComponent from "~/components/drink";

export const loader: LoaderFunction = ({ params }) => {
  invariant(params.name, "Expected params.name");
  return getDrink(params.name);
};

export default function Drink() {
  const drink = useLoaderData<Drink>();
  const params = useParams();

  return (
    <Content value={params.category || ""}>
      <DrinkComponent {...drink} />
    </Content>
  );
}

import {
  useLoaderData,
  Outlet,
  useParams,
  useSearchParams,
} from "@remix-run/react";
import { getDrinks, filterDrinks } from "~/drink";
import type { Drink } from "~/drink";
import type { LoaderFunction } from "@remix-run/node";

import { Content, Root } from "~/components/radixTabs";
import Nav from "~/components/nav";
import DrinkList from "~/components/drinkList";
import Search from "~/components/search";

type LoaderData = {
  drinks: Drink[];
  searchValues: {
    buildStyle?: string;
    search?: string;
  };
};

export const loader: LoaderFunction = async ({ request }) => {
  const url = new URL(request.url);
  const searchValues = Object.fromEntries(url.searchParams.entries());
  const drinks = await getDrinks();

  return {
    drinks,
    searchValues: { ...searchValues, buildStyle: searchValues["build-style"] },
  };
};

export default function Index() {
  const { category = "" } = useParams();

  const { drinks, searchValues } = useLoaderData<LoaderData>();
  const { buildStyle, search } = searchValues;

  return (
    <>
      <Root value={category} activationMode="manual" defaultValue="">
        <Nav category={category} />
        <Content value={category}>
          <Outlet />
          <DrinkList drinks={filterDrinks(drinks, { buildStyle, search })} />
        </Content>
      </Root>
      <Search drinks={drinks} />
    </>
  );
}

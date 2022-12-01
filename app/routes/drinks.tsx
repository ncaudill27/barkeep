import { useLoaderData, Outlet, useParams } from "@remix-run/react";
import { getDrinks } from "~/drink";
import type { LoaderFunction } from "@remix-run/node";

import { Content, Root } from "~/components/radixTabs";
import Nav from "~/components/tabsNav";
import Search from "~/components/search";
import FilterPopover from "~/components/filterPopover";

export const loader: LoaderFunction = async () => {
  const drinks = await getDrinks();

  return drinks;
};

export default function Index() {
  const { category = "" } = useParams();
  const drinks = useLoaderData<typeof loader>();

  return (
    <>
      <Root value={category} activationMode="manual" defaultValue="" asChild>
        <main>
          <Nav category={category} />
          <Content value={category}>
            {/* needs full list of drinks for search */}
            <Search drinks={drinks} />
            <FilterPopover />

            <Outlet />
          </Content>
        </main>
      </Root>
    </>
  );
}

import styled from "styled-components";
import { useLoaderData, Outlet, useParams } from "@remix-run/react";
import { getDrinks } from "~/drink";
import type { Drink } from "~/drink";
import type { LoaderFunction } from "@remix-run/node";

import { Content, Root } from "~/components/radixTabs";
import Nav from "~/components/tabsNav";
import Search from "~/components/search";
import Background from "~/components/background";
import FilterPopover from "~/components/filterPopover";

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

  const { drinks } = useLoaderData<LoaderData>();

  return (
    <>
      <Root value={category} activationMode="manual" defaultValue="" asChild>
        <StyledMain>
          <Nav category={category} />
          <Content value={category}>
            <Search drinks={drinks} />
            <FilterPopover />

            <Outlet />
          </Content>
        </StyledMain>
      </Root>
      <Background color="pink" />
    </>
  );
}

const StyledMain = styled.main`
  position: relative;
  width: fit-content;
`;

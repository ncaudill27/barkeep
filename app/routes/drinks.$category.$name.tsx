import { useLoaderData, useLocation } from "@remix-run/react";
import type { LoaderFunction, MetaFunction } from "@remix-run/node";
import { getDrink } from "~/drink";
import type { Drink } from "~/drink";
import invariant from "tiny-invariant";

import BreadCrumbs from "~/components/breadcrumbs";
import DrinkComponent from "~/components/drink";

export const meta: MetaFunction = ({ params }) => {
  invariant(params.name, "Expected params.name");
  const name = params.name.slice(0, 1).toUpperCase() + params.name.slice(1);
  return {
    title: name,
  };
};

export const loader: LoaderFunction = ({ params }) => {
  invariant(params.name, "Expected params.name");

  return getDrink(params.name);
};

export default function Drink() {
  const drink = useLoaderData<typeof loader>();
  const location = useLocation();
  const crumbs = location.pathname
    .split("/")
    .filter(Boolean)
    .map(decodeURIComponent);
  const deriveHrefFromIndex = (array: string[], index: number) =>
    `/${array
      .slice(0, index + 1)
      .map(encodeURIComponent)
      .join("/")}`;

  return (
    <>
      <BreadCrumbs>
        {crumbs.map((c, i) => (
          <BreadCrumbs.Crumb
            href={deriveHrefFromIndex(crumbs, i)}
            isCurrentPage={deriveHrefFromIndex(crumbs, i) === location.pathname}
          >
            {c.slice(0, 1).toUpperCase() + c.slice(1)}
          </BreadCrumbs.Crumb>
        ))}
      </BreadCrumbs>
      <DrinkComponent {...drink} />
    </>
  );
}

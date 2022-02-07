import client from "./sanity.server";
import type { PortableTextBlockComponent } from "@portabletext/react";
import invariant from "tiny-invariant";

export type Drink = {
  name: string;
  active: boolean;
  garnish: string;
  glassware: string;
  ingredients: Array<Ingredient>;
  build: Array<PortableTextBlockComponent>;
};

export type Ingredient = {
  name: string;
  amount: string;
  measurement: string;
};

type SanityQueryProps = {
  query: string;
  params?: FilterOptions;
};

export type FilterOptions = {
  buildStyle?: string | null;
  category?: string | null;
  name?: string;
  array?: string[];
};
// helper function used in getDrinksByCategory
function getFilteredCategoryArray(category: string): Array<string> {
  let filterOptions = [category];

  if (category === "agave") filterOptions = ["tequila", "mezcal"];
  else if (category == "other") filterOptions = ["vodka"];

  return filterOptions.filter(Boolean);
}

export function getFilterOptionsFromSearch(request: Request): FilterOptions {
  const url = new URL(request.url);
  const searchParams = new URLSearchParams(url.search);
  const buildStyle = searchParams.get("build-style");

  const filterOptions: FilterOptions = {
    buildStyle,
  };

  return filterOptions;
}

// abstracted fetch call to SanityClient
async function sanityFetchDrinks({
  query,
  params = {},
}: SanityQueryProps): Promise<Drink[]> {
  return client.fetch(query, params).then((drinks: Drink[]) => {
    return drinks;
  });
}

// drink index
export async function getDrinks({
  buildStyle,
}: FilterOptions): Promise<Drink[]> {
  const isFilteredQuery = !!buildStyle;

  const query = isFilteredQuery
    ? "*[count((categories[]->title)[lower(@) == $buildStyle]) > 0] {name}"
    : '*[_type == "dinnerCocktail"] {name}';

  const filterParams = {
    buildStyle,
  };

  const requestObj = {
    query,
    params: filterParams,
  };

  return await sanityFetchDrinks(requestObj);
}

// $category index
export async function getDrinksByCategory({
  category,
  buildStyle,
}: FilterOptions): Promise<Drink[]> {
  const isFilteredQuery = !!buildStyle;

  const query = isFilteredQuery
    ? "*[count((categories[]->title)[lower(@) in $array]) > 0 && count((categories[]->title)[lower(@) == $buildStyle]) > 0]"
    : "*[count((categories[]->title)[lower(@) in $array]) > 0]";
  const array = getFilteredCategoryArray(category);

  const params = { array, buildStyle };
  const requestObj = {
    query,
    params,
  };
  console.log("Request OBJ", requestObj);
  return await sanityFetchDrinks(requestObj);
}

// $drink get
export async function getDrink(name: string): Promise<Drink> {
  const query = `*[_type == "dinnerCocktail" && name == $name] {name, active, garnish, glassware, ingredients, 'build': body }`;
  const params = { name };
  const requestObj = {
    query,
    params,
  };

  const [drink] = await sanityFetchDrinks(requestObj);
  return drink;
}

import client from "./sanity.server";
import type { PortableTextBlockComponent } from "@portabletext/react";
import invariant from "tiny-invariant";

export type Drink = {
  name: string;
  active: boolean;
  garnish?: string;
  glassware: string;
  ingredients: Array<Ingredient>;
  build?: Array<PortableTextBlockComponent>;
  categories?: string[];
};

export type Ingredient = {
  name: string;
  amount: string;
  measurement: string;
};

type SanityQueryProps = {
  query: string;
  params?: SanityParamProps;
};

type SanityParamProps = {
  name?: string;
  array?: string[];
};

export type FilterOptions = {
  buildStyle?: string | null;
  search?: string | null;
};

export function filterDrinks(
  drinks: Drink[],
  { buildStyle, search }: FilterOptions
): Drink[] {
  if (buildStyle) {
    drinks = filterByBuildStyle(drinks, buildStyle);
  }

  if (search) {
    drinks = filterBySearch(drinks, search);
  }

  return drinks;
}

function filterByBuildStyle(drinks: Drink[], buildStyle: string) {
  if (buildStyle === "all") return drinks;

  return drinks.filter((drink) =>
    drink.categories?.includes(
      buildStyle
        ? buildStyle.slice(0, 1).toUpperCase() + buildStyle.slice(1)
        : ""
    )
  );
}

function filterBySearch(drinks: Drink[], search: string) {
  const regex = new RegExp(search);
  return drinks.filter((drink) => regex.test(drink.name));
}

// helper function used in getDrinksByCategory
function getFilteredCategoryArray(category: string): Array<string> {
  let filterOptions = [category];

  if (category === "agave") filterOptions = ["tequila", "mezcal"];
  else if (category == "other") filterOptions = ["vodka"];

  return filterOptions.filter(Boolean);
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
export async function getDrinks(): Promise<Drink[]> {
  const query =
    '*[_type == "dinnerCocktail"] {name, "categories": categories[]->title}';

  return await sanityFetchDrinks({ query });
}

// $category index
export async function getDrinksByCategory(category: string): Promise<Drink[]> {
  const query =
    '*[count((categories[]->title)[lower(@) in $array]) > 0] {name, "categories": categories[]->title}';
  const array = getFilteredCategoryArray(category);
  const params = { array };

  return await sanityFetchDrinks({ query, params });
}

// $drink get
export async function getDrink(name: string): Promise<Drink> {
  const query = `*[_type == "dinnerCocktail" && name == $name] {name, active, garnish, glassware, ingredients, 'build': body }`;
  const params = { name };

  const [drink] = await sanityFetchDrinks({ query, params });
  return drink;
}

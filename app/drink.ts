import client from "./sanity.server";
import type { PortableTextBlockComponent } from "@portabletext/react";

export type Drink = {
  name: string;
  garnish?: string;
  glassware?: string;
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
  buildStyle?: string;
  search?: string;
};

export function filterDrinks(
  drinks: Drink[],
  filterOptions: FilterOptions
): Drink[] {
  if (!!filterOptions?.buildStyle) {
    drinks = filterByBuildStyle(drinks, filterOptions.buildStyle);
  }

  if (!!filterOptions?.search) {
    drinks = filterBySearch(drinks, filterOptions.search);
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
  const regex = new RegExp(search, "i");
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
export async function getDrinks(
  filterOptions: FilterOptions
): Promise<Drink[]> {
  const query =
    '*[_type == "dinnerCocktail"] {name, ingredients, "categories": categories[]->title}';
  const drinks = await sanityFetchDrinks({ query });

  return filterDrinks(drinks, filterOptions);
}

// $category index
export async function getDrinksByCategory(category: string): Promise<Drink[]> {
  const query =
    '*[count((categories[]->title)[lower(@) in $array]) > 0] {name, ingredients, "categories": categories[]->title}';
  const array = getFilteredCategoryArray(category);
  const params = { array };

  return await sanityFetchDrinks({ query, params });
}

// $drink get
export async function getDrink(name: string) {
  const query = `*[_type == "dinnerCocktail" && name == $name] {name, garnish, glassware, ingredients, 'build': body }`;
  const params = { name };

  const [drink] = await sanityFetchDrinks({ query, params });
  return drink;
}

export function getDrinkUrl(drink: Drink) {
  const category = drink.categories
    ?.filter((c) => c !== "Shaken" && c !== "Stirred")[0]
    .toLowerCase();

  return `/drinks/${category}/${drink.name}`;
}

import client from "./sanity.server";
import invariant from "tiny-invariant";

// helper function used in getDrinksByCategory
function parseCategoryParam(param: string): string {
  if (param === "agave")
    return '*[count((categories[]->title)[@ in ["Tequila", "Agave"]]) > 0]';
  else if (param == "other")
    return '*[count((categories[]->title)[@ in ["Vodka"]]) > 0]';
  else
    return "*[count((categories[]->title)[lower(@) == $category]) > 0]{name}";
}

export type Drink = {
  name: string;
  active: boolean;
  garnish: string;
  glassware: string;
  ingredients: Array<{ name: string; amount: string; measurement: string }>;
};

// abstracted fetch call to SanityClient
async function sanityFetchDrinks(query: string, params = {}): Promise<Drink[]> {
  return client.fetch(query, params).then((drinks: Drink[]) => {
    return drinks;
  });
}

// drink index
export async function getDrinks(): Promise<Drink[]> {
  const query = '*[_type == "dinnerCocktail"] {name}';

  return await sanityFetchDrinks(query);
}

// $category index
export async function getDrinksByCategory(category: string): Promise<Drink[]> {
  const query = parseCategoryParam(category);

  const params = { category };
  return await sanityFetchDrinks(query, params);
}

// $drink get
export async function getDrink(name: string): Promise<Drink> {
  const query = `*[_type == "dinnerCocktail" && name == $name] {name, active, garnish, glassware, ingredients }`;
  const params = { name };
  const [drink] = await sanityFetchDrinks(query, params);
  return drink;
}

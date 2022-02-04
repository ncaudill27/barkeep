import client from "./sanity.server";
import invariant from "tiny-invariant";

export type Drink = {
  name: string;
  active: boolean;
  garnish: string;
  glassware: string;
  ingredients: Array<{ name: string; amount: string; measurement: string }>;
};

async function sanityFetchDrinks(query: string, params = {}): Promise<Drink[]> {
  return client.fetch(query, params).then((drinks: Drink[]) => {
    return drinks;
  });
}

export async function getDrinks(): Promise<Drink[]> {
  const query = '*[_type == "dinnerCocktail"] {name}';

  return await sanityFetchDrinks(query);
}

export async function getDrinksByCategory(category: string): Promise<Drink[]> {
  const query =
    "*[count((categories[]->title)[lower(@) == $category]) > 0]{name}";
  const params = { category };
  return await sanityFetchDrinks(query, params);
}

export async function getDrink(name: string): Promise<Drink> {
  const query = `*[_type == "dinnerCocktail" && name == $name] {name, active, garnish, glassware, ingredients }`;
  const params = { name };
  const [drink] = await sanityFetchDrinks(query, params);
  return drink;
}

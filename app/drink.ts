import client from "./sanity.server";
import invariant from "tiny-invariant";

export type Drink = {
  name: string;
  active: boolean;
  garnish: string;
  glassware: string;
  ingredients: Array<{ name: string; amount: string; measurement: string }>;
};

export async function getDrinks() {
  const query = '*[_type == "dinnerCocktail"] {name}';

  return client.fetch(query).then((drinks: Drink[]) => {
    return drinks;
  });
}

export async function getDrinksByCategory(category: string) {
  const query =
    "*[count((categories[]->title)[lower(@) == $category]) > 0]{name}";
  const params = { category };
  return client.fetch(query, params).then((drinks: Drink[]) => {
    return drinks;
  });
}

export async function getDrink(name: string) {
  const query = `*[_type == "dinnerCocktail" && name == $name] {name, active, garnish, glassware, ingredients, categories}`;
  const params = { name };
  await client.fetch(query, params).then((drinks: Drink[]) => {
    return drinks[0];
  });
}

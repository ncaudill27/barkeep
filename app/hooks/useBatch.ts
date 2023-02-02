import { Drink } from "~/drink";
import { parseMeasurement } from "~/utils/parseMeasurements";

export function useBatch(recipes: Drink[], batchSize: number) {
  // Initialize an empty array to store the batched recipes
  let batchedRecipes: Drink[] = [];
  // Loop through each recipe
  for (let i = 0; i < recipes.length; i++) {
    let currentRecipe = recipes[i];
    // Initialize an empty object to store the batched recipe
    let batchedRecipe: Drink = { name: currentRecipe.name, ingredients: [] };
    // Loop through each ingredient of the current recipe
    for (let ingredient in currentRecipe.ingredients) {
      const { name, amount, measurement } =
        currentRecipe.ingredients[ingredient];
      let ingredientAmount = parseInt(amount, 10);

      // Calculate the ingredient amount for the batch size
      let batchedIngredientAmount = (ingredientAmount * batchSize).toString();
      // Add the ingredient and the batched ingredient amount to the batched recipe object
      batchedRecipe.ingredients.push({
        name,
        amount: batchedIngredientAmount,
        measurement: parseMeasurement(measurement, batchedIngredientAmount),
      });
    }
    // Add the batched recipe to the array of batched recipes
    batchedRecipes.push(batchedRecipe);
  }
  // Return the array of batched recipes
  return batchedRecipes;
}

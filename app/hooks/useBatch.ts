import { Drink } from "~/drink";
import {
  amountToNumber,
  numberToAmount,
  parseMeasurement,
} from "~/utils/parseMeasurements";

export type BatchedRecipe = Drink & { batchSize?: number };

export function useBatch(recipes: BatchedRecipe[], batchSize: number = 1) {
  // Initialize an empty array to store the batched recipes
  let batchedRecipes: BatchedRecipe[] = [];
  // Loop through each recipe
  for (let i = 0; i < recipes.length; i++) {
    let currentRecipe = recipes[i];
    // Initialize an empty object to store the batched recipe
    let batchedRecipe: Drink & { batchSize: number } = {
      name: currentRecipe.name,
      ingredients: [],
      batchSize: currentRecipe.batchSize ?? batchSize,
    };
    // Loop through each ingredient of the current recipe
    for (let ingredient in currentRecipe.ingredients) {
      const { name, amount, measurement } =
        currentRecipe.ingredients[ingredient];

      let ingredientAmount = amountToNumber(amount);

      // Calculate the ingredient amount for the batch size
      let batchedIngredientAmount = numberToAmount(
        ingredientAmount * batchSize
      );
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

import { Drink } from "~/drink";
import {
  amountToNumber,
  numberToAmount,
  parseMeasurement,
} from "~/utils/parseMeasurements";

export type BatchedRecipe = Drink & { batchSize?: number };

// TODO turn this into a batch function for a single drink
export function useBatch(recipes: BatchedRecipe[], batchSize: number) {
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
      let { name, amount, measurement } = currentRecipe.ingredients[ingredient];
      // Calculate the ingredient amount for the batch size
      if (!!amount && !!measurement) {
        amount = numberToAmount(amountToNumber(amount) * batchSize);
        measurement = parseMeasurement(measurement, amount);
      }
      // Add the ingredient and the batched ingredient amount to the batched recipe object
      batchedRecipe.ingredients.push({
        name,
        amount,
        measurement,
      });
    }
    // Add the batched recipe to the array of batched recipes
    batchedRecipes.push(batchedRecipe);
  }
  // Return the array of batched recipes
  return batchedRecipes;
}

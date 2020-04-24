import {Recipe} from "./recipe.model";
import {Ingredient} from "../shared/ingredient.modul";

export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe('Hamburger', 'It is a hamburger', 'http://www.mindmegette.hu/images/230/O/img_4156.jpg',
      [new Ingredient('Bun', 1), new Ingredient('Cheese', 1), new Ingredient('Meat', 1)]),
    new Recipe('Pizza', 'It is a pizza',
      'https://img.buzzfeed.com/tasty-app-user-assets-prod-us-east-1/tips/11f2369e168d42f0ad0cda0befc400fc.jpeg?output-quality=auto&downsize=800:*',
      [new Ingredient('Pasta', 1), new Ingredient('Cheese', 1), new Ingredient('Tomato', 1)])
  ];

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(id: number) {
    return this.recipes[id];
  }
}

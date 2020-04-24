import {Component, OnInit} from '@angular/core';
import {Recipe} from "../recipe.model";
import {RecipeService} from "../recipe.service";
import {ShoppingListService} from "../../shopping-list/shopping-list.service";
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.component.html',
  styleUrls: ['./recipes-detail.component.css']
})
export class RecipesDetailComponent implements OnInit {
selectedRecipeDetailed: Recipe;
id: number;

  constructor(private recipeService: RecipeService, private sListService: ShoppingListService,
              private route: ActivatedRoute) {  }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {this.id = params['id']; this.selectedRecipeDetailed = this.recipeService.getRecipe(this.id); }
    );
  }

  addIngredientsToShoppingList() {
    let i: number;
    for (i = 0; i < this.selectedRecipeDetailed.ingredients.length; i++) {
      this.sListService.addIngredients(this.selectedRecipeDetailed.ingredients[i]);
    }
  }
}

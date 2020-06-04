import {Component, OnInit} from '@angular/core';
import { Recipe } from "../recipe.model";
import {RecipeService} from "../recipe.service";
import {Subscription} from "rxjs/index";

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  recipes = [];
  recipeSubscription: Subscription;

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
    this.recipeSubscription = this.recipeService.recipesChanged.subscribe((newRecipes: Recipe[]) => {
      this.recipes = newRecipes;
    });
  }
}

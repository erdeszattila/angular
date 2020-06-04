import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router, RouterModule} from "@angular/router";
import {Form, FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
import {RecipeService} from "../recipe.service";
import {Recipe} from "../recipe.model";
import {Ingredient} from "../../shared/ingredient.modul";
import {AppRoutingModule} from "../../app-routing.module";

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id: number;
  allowEdit = false;
  recipeForm: FormGroup;
  editedRecipe: Recipe;
  recipeIngredients = new FormArray([]);

  constructor(private route: ActivatedRoute, private recipeService: RecipeService, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.allowEdit = params['id'] != null;
        this.initForm(); }
    );
  }

  private initForm() {
    if (this.allowEdit) {
      this.editedRecipe = this.recipeService.getRecipe(this.id);
      for (let ingredient of this.editedRecipe.ingredients) {
        this.recipeIngredients.push(new FormGroup({
          'name': new FormControl(ingredient.name, Validators.required),
          'amount': new FormControl(ingredient.amount, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
        }));
      }
    }
    this.recipeForm = new FormGroup({
      'name': new FormControl(this.allowEdit ? this.editedRecipe.name : null, Validators.required),
      'imgPath': new FormControl(
        this.allowEdit ? this.editedRecipe.imagePath : null, Validators.required),
      'description': new FormControl(
        this.allowEdit ? this.editedRecipe.description : null, Validators.required),
      'ingredients' : this.recipeIngredients
      }
      )
    ;
  }

  onSubmit() {
    const newRecipe = new Recipe(this.recipeForm.value['name'], this.recipeForm.value['description'],
      this.recipeForm.value['imgPath'], this.recipeForm.value['ingredients']);
    if (this.allowEdit) {
      this.recipeService.editRecipe(this.id, newRecipe);
    } else {
      this.recipeService.addRecipe(newRecipe);
    }
    this.router.navigate(['../']);
  }

  onAddIngredient() {
    (<FormArray> this.recipeForm.get('ingredients')).push(new FormGroup({
      'name': new FormControl(null, Validators.required),
      'amount': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
    }));
  }

  onDeleteIngredient(id: number) {
    (<FormArray> this.recipeForm.get('ingredients')).removeAt(id);
  }
}

import {Component, OnDestroy, OnInit} from '@angular/core';
import {Ingredient} from "../shared/ingredient.modul";
import {ShoppingListService} from "./shopping-list.service";
import {Subscription} from "rxjs/index";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[];
  ingredientsSubscription: Subscription;

  constructor(private sListService: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.sListService.getIngredients();
    this.ingredientsSubscription = this.sListService.ingredientsChanged
      .subscribe((newIngredients: Ingredient[]) => {this.ingredients = newIngredients;});
  }

  ngOnDestroy() {
    this.ingredientsSubscription.unsubscribe();
  }

  onEditItem(id: number) {
    this.sListService.startedEditing.next(id);
  }
}

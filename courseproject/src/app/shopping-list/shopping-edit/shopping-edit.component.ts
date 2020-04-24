import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Ingredient} from "../../shared/ingredient.modul";
import {ShoppingListService} from "../shopping-list.service";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput', {static: false}) ingredientNameRef: ElementRef;
  @ViewChild('amountInput', {static: false}) quantityRef: ElementRef;

  constructor(private sListService: ShoppingListService) { }

  ngOnInit() {
  }

  onAddIngredient() {
    this.sListService.addIngredients(new Ingredient(this.ingredientNameRef.nativeElement.value, this.quantityRef.nativeElement.value));
  }
}

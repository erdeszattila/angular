import {Component, ElementRef, EventEmitter, OnDestroy, OnInit, Output, ViewChild} from '@angular/core';
import {Ingredient} from "../../shared/ingredient.modul";
import {ShoppingListService} from "../shopping-list.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Subscription} from "rxjs/index";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  ingredientForm: FormGroup;
  subscription: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedItem: Ingredient;

  constructor(private sListService: ShoppingListService) { }

  ngOnInit() {
    this.ingredientForm = new FormGroup({
      'ingredientName': new FormControl(null, Validators.required),
      'ingredientAmount': new FormControl(null,  [Validators.required, this.checkingAmount.bind(this)])
      }
    );
    this.subscription = this.sListService.startedEditing.subscribe(
      (index: number) => {
        this.editMode = true;
        this.editedItemIndex = index;
        this.editedItem = this.sListService.getIngredient(this.editedItemIndex)
        if (this.editMode) {
          this.ingredientForm.controls['ingredientName'].setValue(this.editedItem.name);
          this.ingredientForm.controls['ingredientAmount'].setValue(this.editedItem.amount);
        }
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  checkingAmount(control: FormControl): {[s: string]: boolean} {
    if (+control.value <= 0) {
      return{'incorrect': true};
    }
    return null;
  }

  onAddIngredient() {
    if (this.editMode) {
      this.sListService.editIngredient(+this.editedItemIndex,
        new Ingredient(this.ingredientForm.value['ingredientName'], +this.ingredientForm.value['ingredientAmount']));
    } else {
      this.sListService.addIngredients(
        new Ingredient(this.ingredientForm.value['ingredientName'], +this.ingredientForm.value['ingredientAmount']));
    }
    this.onReset();
  }

  onReset() {
    this.ingredientForm.reset();
    this.editMode = false;
  }

  onDelete() {
    this.sListService.deleteItem(+this.editedItemIndex);
    this.onReset();
  }
}

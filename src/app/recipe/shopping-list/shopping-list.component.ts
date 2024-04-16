import { Component, Signal, inject } from '@angular/core';
import { Recipe } from '../models/recipe';
import { ShoppingService } from '../services/shopping.service';
import { MatIcon } from '@angular/material/icon';


@Component({
    selector: 'app-shopping-list',
    templateUrl: './shopping-list.component.html',
    styleUrl: './shopping-list.component.css',
    standalone: true,
    imports: [MatIcon]
})
export class ShoppingListComponent {
  private shoppingService = inject(ShoppingService);
  protected recipeList: Signal<Recipe[]> = this.shoppingService.recipesSelected
  protected shoppingList: Signal<string[]> = this.shoppingService.shoppingList;

  protected removeSelectedRecipe(recipe: Recipe): void {
    this.shoppingService.removeSelectedRecipe(recipe);
  }

  protected clearAllRecipeSelected(): void {
    this.shoppingService.clearAllRecipeSelected();
  }
}

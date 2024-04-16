import { Injectable, Signal, WritableSignal, computed, signal } from '@angular/core';
import { Recipe } from '../models/recipe';

@Injectable({
  providedIn: 'root'
})
export class ShoppingService  {
  private _recipesSelected: WritableSignal<Recipe[]> = signal([]);
  private _shoppingList: Signal<string[]> = computed(() => {
    return this._recipesSelected().flatMap(recipe => {
      if (recipe.version === 'v2') {
        return  [
          ...recipe.ingredients.flatMap(
            (ingredient) =>
              ingredient.name + ' ' + ingredient.quantity + ' ' + ingredient.unit
          ),
        ];
      } else {
        return [...recipe.ingredients];
      }
    });
  });

  constructor() {
    const recipeSavedStr = sessionStorage.getItem('recipesSelected');
    if (!!recipeSavedStr) {
      const recipeListSaved: Recipe[] = JSON.parse(recipeSavedStr);
      recipeListSaved.forEach(recipe => {this.addSelectedRecipe(recipe)});
    }
  }

  get recipesSelected(): Signal<Recipe[]> {
    return this._recipesSelected;
  }

  get shoppingList(): Signal<string[]> {
    return this._shoppingList;
  }

  addSelectedRecipe(recipe: Recipe): void {
    this._recipesSelected.update((recipes) => [...recipes, recipe]);
  }

  removeSelectedRecipe(recipe: Recipe): void {
    this._recipesSelected.update((recipes) => recipes.filter(recipeSelected => recipeSelected.id !== recipe.id));
  }

  clearAllRecipeSelected(): void {
    this._recipesSelected.set([]);
    // this._recipesSelected = [];
    // this._shoppingList = [];
  }

  // private notify(): void {
  //   sessionStorage.setItem('recipesSelected', JSON.stringify(this._recipesSelected));
  // }
}

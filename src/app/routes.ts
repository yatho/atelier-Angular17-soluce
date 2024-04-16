import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'recipes', loadChildren: () => import('./recipe/recipe.routes')
  },
  {
    path: '', redirectTo: '/recipes', pathMatch: 'full'
  }
];

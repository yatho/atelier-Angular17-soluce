import { Component, inject } from '@angular/core';
import { RecipeService } from '../services/recipe.service';
import { NgIf, NgFor, AsyncPipe } from '@angular/common';

@Component({
    selector: 'app-ideas',
    templateUrl: './ideas.component.html',
    styleUrl: './ideas.component.css',
    standalone: true,
    imports: [NgIf, NgFor, AsyncPipe]
})
export class IdeasComponent {
  protected beefIdeas = inject(RecipeService).getIdeaByMealName('beef');
}

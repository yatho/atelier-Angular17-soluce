import { Component, inject } from '@angular/core';
import { ShoppingService } from '../recipe/services/shopping.service';
import { AsyncPipe } from '@angular/common';
import { MatBadge } from '@angular/material/badge';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatButton } from '@angular/material/button';
import { MatToolbar } from '@angular/material/toolbar';
@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrl: './header.component.css',
    standalone: true,
    imports: [MatToolbar, MatButton, RouterLink, RouterLinkActive, MatBadge, AsyncPipe]
})
export class HeaderComponent {
  protected recipeSelectedEvent = inject(ShoppingService).recipeSelectedEvent;
}

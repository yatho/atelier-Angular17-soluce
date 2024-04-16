import { AppComponent } from './app/app.component';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideHttpClient } from '@angular/common/http';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { routes } from './app/routes';


bootstrapApplication(AppComponent, {
    providers: [
        provideHttpClient(),
        provideAnimations(),
        provideRouter(routes, withComponentInputBinding())
    ]
})
  .catch(err => console.error(err));

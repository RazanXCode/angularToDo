import { ApplicationConfig, provideZoneChangeDetection, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { taskReducer } from './store/task.reducer';
import { provideStore } from '@ngrx/store';



export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideClientHydration(withEventReplay()), provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),provideStore({ tasks:taskReducer  })]
};


// import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
// import { TodoComponent } from './app/todo/todo.component';
// import { provideStore } from '@ngrx/store';
// import { taskReducer } from './app/state/task.reducer';
// import { ReactiveFormsModule } from '@angular/forms';

// // Bootstrapping the Standalone Component and providing the store
// platformBrowserDynamic()
//   .bootstrapModule(TodoComponent, {
//     providers: [
//       provideStore({ task: taskReducer }),
//     ],
//   })
//   .catch(err => console.error(err));

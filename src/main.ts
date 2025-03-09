import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideStore } from '@ngrx/store';
import { taskReducer } from './app/store/task.reducer';  // Adjust the path if needed

bootstrapApplication(AppComponent, {
  providers: [
    provideStore({ tasks: taskReducer })  // Register the store with the task reducer
  ]
}).catch(err => console.error(err));

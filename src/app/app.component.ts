import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoComponent } from './todo/todo.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [ReactiveFormsModule,RouterOutlet,TodoComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angularToDo';
}

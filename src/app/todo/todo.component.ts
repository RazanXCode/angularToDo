// import { Component } from '@angular/core';
// import { ReactiveFormsModule,FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
// import { CommonModule } from '@angular/common'

// @Component({
//   selector: 'app-todo',
//   standalone: true,
//   imports: [ReactiveFormsModule, CommonModule],
//   templateUrl: './todo.component.html',
//   styleUrl: './todo.component.css'
// })
// export class TodoComponent {
//   todoForm: FormGroup;
//   taskList: string[] = [];

//   constructor(private fb: FormBuilder) {
//     // Initialize the form group with FormControl for task input
//     this.todoForm = this.fb.group({
//       task: new FormControl('', [Validators.required, Validators.minLength(1)]), // Validation to prevent empty tasks
//     });
//   }

//   onSubmit() {
//     if (this.todoForm.valid) {
//       // Push the task to the task list
//       this.taskList.push(this.todoForm.value.task);
//       // Reset the form after submitting
//       this.todoForm.reset();
//     }
//   }

// }

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Task } from '../store/task.model';
import { addTask, toggleTask, deleteTask } from '../store/task.actions';
import { selectAllTasks } from '../store/task.selectors';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {
  todoForm: FormGroup;
  tasks$: Observable<Task[]>; // Observable to fetch tasks from the store

  constructor(private fb: FormBuilder, private store: Store) {
    this.todoForm = this.fb.group({
      task: new FormControl('', [Validators.required, Validators.minLength(1)]),
    });

    // Select tasks from the store
    this.tasks$ = this.store.select(selectAllTasks);
  }

  onSubmit() {
    if (this.todoForm.valid) {
      this.store.dispatch(addTask({ name: this.todoForm.value.task }));
      this.todoForm.reset();
    }
  }

  onToggleTask(id: number) {
    this.store.dispatch(toggleTask({ id }));
  }

  onDeleteTask(id: number) {
    this.store.dispatch(deleteTask({ id }));
  }
}

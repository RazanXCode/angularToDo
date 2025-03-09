import { createReducer, on } from '@ngrx/store';
import { addTask, toggleTask, deleteTask } from './task.actions'; // Correct path
import { Task } from './task.model'; // Ensure this is correct

export const initialState: Task[] = [];

export const taskReducer = createReducer(
  initialState,
  on(addTask, (state, { name }) => [
    ...state, { id: Date.now(), name, completed: false }
  ]),
  on(toggleTask, (state, { id }) =>
    state.map(task => task.id === id ? { ...task, completed: !task.completed } : task)
  ),
  on(deleteTask, (state, { id }) => state.filter(task => task.id !== id))
);

import { createAction, props } from '@ngrx/store';
import { Task } from './task.model'; // Ensure this is correct

export const addTask = createAction('[Task] Add', props<{ name: string }>());
export const toggleTask = createAction('[Task] Toggle', props<{ id: number }>());
export const deleteTask = createAction('[Task] Delete', props<{ id: number }>());

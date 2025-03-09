import { createSelector, createFeatureSelector } from '@ngrx/store';
import { Task } from './task.model'; // Ensure this is correct

export const selectTasksState = createFeatureSelector<Task[]>('tasks');

export const selectAllTasks = createSelector(selectTasksState, (tasks) => tasks);

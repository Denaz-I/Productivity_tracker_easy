import { createSelector } from "@reduxjs/toolkit";
import type { RootState } from "./index";

export const selectTasks = (s: RootState) => s.tasks;

export const makeSelectFilteredTasks = (filter: "all" | "done" | "todo") =>
  createSelector([selectTasks], (tasks) => {
    if (filter === "done") return tasks.filter(t => t.completed);
    if (filter === "todo") return tasks.filter(t => !t.completed);
    return tasks;
  });

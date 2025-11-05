import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "./tasksSlice";
import themeReducer from "./themeSlice";

const LS_KEY = "tasks";

function loadState () {
    const raw = localStorage.getItem(LS_KEY);
    if (!raw) return;
    const tasks = JSON.parse(raw);
    return {tasks}
}

function saveState(state: RootState) {
    localStorage.setItem(LS_KEY, JSON.stringify(state.tasks))
}

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    theme: themeReducer,
  },
  preloadedState: loadState()
  
});

store.subscribe(() => saveState(store.getState()))



export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
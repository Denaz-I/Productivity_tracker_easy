import { createSlice} from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { Task } from "../Types/task";

const initialState: Task[] = [];

const tasksSlice = createSlice({
    name: "tasks", 
    initialState,
    reducers: {
        addTask: (state, action: PayloadAction<string>) => {
            state.push({
                id: crypto.randomUUID(),
                title: action.payload.trim(),
                completed: false,
            })
        },

        toggleTask: (state, action: PayloadAction<string>) => {
            const t = state.find(x => x.id === action.payload);
            if (t) t.completed = !t.completed;
        },
        removeTask: (state, action: PayloadAction<string>) =>{
            return state.filter(x => x.id !== action.payload);
        },
        setAllCompleted: (state, action: PayloadAction<boolean>) => {
            state.forEach((task) => {
                task.completed = action.payload;
            });
        },
        resetCompletedTaskDaily: (state) => {
            return state.filter((x) => !x.completed)
        }
    }
})

export const {addTask, toggleTask, removeTask, setAllCompleted, resetCompletedTaskDaily} = tasksSlice.actions;
export default tasksSlice.reducer
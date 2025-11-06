import { useState } from "react";
import type { FormEvent } from "react";
import { useAppDispatch } from "../Store/hooks";
import { addTask } from "../Store/tasksSlice";

import TextField from '@mui/material/TextField';

function AddTaskForm() {
  const [title, setTitle] = useState("");
  const dispatch = useAppDispatch();

  const onSubmit = (eventoForm: FormEvent) => {
    eventoForm.preventDefault();
    if (!title.trim()) return;
    dispatch(addTask(title));
    setTitle("");
  };

  return (
    <form onSubmit={onSubmit} className="flex gap-2 mb-4">
        <TextField
            label="Aggiungi attività e premi invio" 
            variant="standard" value={title}
            onChange={(e) => setTitle(e.target.value)}
            sx={{marginLeft:3}}
        />
    </form>
  );
}

export default AddTaskForm
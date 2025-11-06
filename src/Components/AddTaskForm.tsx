import { useState } from "react";
import type { FormEvent } from "react";
import { useAppDispatch } from "../Store/hooks";
import { addTask } from "../Store/tasksSlice";

import TextField from '@mui/material/TextField';
import { Box } from "@mui/material";

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
    <Box width={250}>
      <form onSubmit={onSubmit}>
          <TextField fullWidth
              label="Aggiungi un'attività e premi invio" 
              variant="standard" value={title}
              onChange={(e) => setTitle(e.target.value)}
              sx={{marginLeft:2}}
          />
      </form>
    </Box>
  );
}

export default AddTaskForm
import type { Task } from "../Types/task";
import { useAppDispatch, useAppSelector } from "../Store/hooks";
import { toggleTask, removeTask } from "../Store/tasksSlice";
import {ListItem, Checkbox, Typography, IconButton, Paper} from "@mui/material";
import ClearIcon from '@mui/icons-material/Clear';

type Props = { task: Task };

function TaskCard({ task }: Props) {
  const dispatch = useAppDispatch();
  const mode = useAppSelector((m) => m.theme.mode);

    return (
    <Paper
      elevation={1}
      sx={{
        mb: 1,
        px: 1,
        borderRadius: 2,
        transition: "background-color 0.3s ease",
        bgcolor: task.completed ? mode==="light" ? "success.light" : "success.dark" : "background.paper",
      }}
    >
      <ListItem
        disablePadding
        secondaryAction={
          <IconButton
            edge="end"
            aria-label="delete"
            color="error"
            onClick={() => dispatch(removeTask(task.id))}
          >
            <ClearIcon />
          </IconButton>
        }
      >
        <Checkbox
          checked={task.completed}
          onChange={() => dispatch(toggleTask(task.id))}
          color="success"
        />
        <Typography
          variant="body1"
          sx={{
            flexGrow: 1,
            cursor: "pointer",
            textDecoration: task.completed ? "line-through" : "none",
            color: task.completed ? "text.secondary" : "text.primary",
          }}
          onClick={() => dispatch(toggleTask(task.id))}
        >
          {task.title}
        </Typography>
      </ListItem>
    </Paper>
  );
}

export default TaskCard;

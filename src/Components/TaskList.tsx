import { useAppSelector, useAppDispatch } from "../Store/hooks";
import TaskCard from "./TaskCard";
import AddTaskForm from "./AddTaskForm";
import AllTaskCompleted from "./AllTaskCompleted";
import { resetCompletedTaskDaily } from "../Store/tasksSlice";
import { Typography } from "@mui/material";

function TasksList() {
    const dispatch = useAppDispatch()
    const tasks = useAppSelector((t) => t.tasks);

    const oggi = new Date().toDateString();
    const reset = localStorage.getItem("lastResetDate")

    const ora = new Date().getHours();
    if (ora >= 6 && reset !== oggi) {
        dispatch(resetCompletedTaskDaily())
        localStorage.setItem("lastResetDate", oggi)
    }

    return (
        <div>
            <AddTaskForm />
                <AllTaskCompleted />
                {tasks.length === 0 ? (
                    <Typography color="grey" sx={{ml:1}}>Non hai ancora inserito attività</Typography>
                ) : (
                    tasks.map((t) => <TaskCard key={t.id} task={t} />)
                )}
        </div>
    );
}

export default TasksList;

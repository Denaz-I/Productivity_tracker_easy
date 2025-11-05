import { useAppSelector } from "../Store/hooks";
import { Typography } from "@mui/material";
import TaskCard from "./TaskCard";
import AddTaskForm from "./AddTaskForm";
import AllTaskCompleted from "./AllTaskCompleted";

function TasksList() {
    const tasks = useAppSelector((t) => t.tasks);

    return (
        <div>
            <Typography variant="h4" sx={{}}>Le mie attività</Typography>
            <AddTaskForm />
                <AllTaskCompleted />
                {tasks.length === 0 ? (
                    <p className="text-center text-gray-500">Nessuna attività ancora</p>
                ) : (
                    tasks.map((t) => <TaskCard key={t.id} task={t} />)
                )}
        </div>
    );
}

export default TasksList;

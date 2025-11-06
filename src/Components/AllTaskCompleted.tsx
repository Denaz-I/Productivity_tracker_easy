import { Box, Checkbox } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../Store/hooks";
import { setAllCompleted } from "../Store/tasksSlice";

function AllTaskCompleted () {
    const dispatch = useAppDispatch()

    const allCompleted = useAppSelector(
        (state) => state.tasks.length > 0 && state.tasks.every((t) => t.completed)
    );

    return (
        <Box>
            <Checkbox checked={allCompleted}
                onChange={(t) => dispatch(setAllCompleted(t.target.checked))}
                color="success" 
                sx={{marginLeft:2}}/>
        <span>{allCompleted ? "Deseleziona tutte" : "Completa tutte"}</span>
        </Box>
    )
}

export default AllTaskCompleted
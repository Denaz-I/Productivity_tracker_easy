import { AppBar, Button, Typography, LinearProgress } from "@mui/material";
import { toggleTheme } from "../Store/themeSlice";
import { ToggleOff, ToggleOn, LightMode } from "@mui/icons-material";

import { useAppDispatch, useAppSelector } from "../Store/hooks";

function Header() {
    const dispatch = useAppDispatch();
    const mode = useAppSelector((m) => m.theme.mode);
    const tasks = useAppSelector((p) => p.tasks);

    const totalTasks = tasks.length;
    const completedTasks = tasks.filter((t) => t.completed).length;
    const progress = totalTasks > 0 ? (completedTasks / totalTasks) * 100:0;

    console.log({totalTasks, completedTasks, progress})

    return <AppBar position="sticky">
      <LinearProgress variant="determinate" color="success" value={progress} />
      <Typography variant="h4" sx={{my:2, mx:2}}>Le mie attività
        <Button
          onClick={() => dispatch(toggleTheme())}
          color="inherit"
          sx={{float:"right"}}
        >
          <LightMode sx={{mr:1}}/> {mode === "light" ? <ToggleOn /> : <ToggleOff /> }
        </Button>
      </Typography>
    </AppBar>
}

export default Header
import { Button } from "@mui/material";
import { toggleTheme } from "../Store/themeSlice";
import { ToggleOff, ToggleOn, LightMode } from "@mui/icons-material";

import { useAppDispatch, useAppSelector } from "../Store/hooks";

function Theme() {
    const dispatch = useAppDispatch();
    const mode = useAppSelector((m) => m.theme.mode);

    return <div>
      <Button
        onClick={() => dispatch(toggleTheme())}
        color="inherit"
        sx={{marginLeft:33, marginBottom:1, marginTop:2}}
      >
      <LightMode sx={{mr:1}}/> {mode === "light" ? <ToggleOn /> : <ToggleOff /> }
      </Button>
    </div>
}

export default Theme
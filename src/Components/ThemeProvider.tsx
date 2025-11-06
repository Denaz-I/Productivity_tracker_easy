import { useMemo } from "react";
import { useSelector } from "react-redux";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import type { RootState } from "../Store/store";
import App from "../App";

function ThemedApp() {
  const mode = useSelector((state: RootState) => state.theme.mode);

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          ...(mode === "dark"
            ? {
              background: { default: "#121212", paper: "#1e1e1e" },
            }
            : {
              background: { default: "#f5f5f5", paper: "#fff" },
              }),
        },
        shape: { borderRadius: 10 },
      }),
    [mode]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  );
}

export default ThemedApp
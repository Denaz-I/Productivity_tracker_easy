import { useMemo } from "react";
import { useSelector } from "react-redux";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import type { RootState } from "../Store/store";
import App from "../App";

export default function ThemedApp() {
  const mode = useSelector((state: RootState) => state.theme.mode);

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          ...(mode === "light"
            ? {
                background: { default: "#f5f5f5", paper: "#fff" },
              }
            : {
                background: { default: "#121212", paper: "#1e1e1e" },
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
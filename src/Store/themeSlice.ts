import { createSlice } from "@reduxjs/toolkit";

export type ThemeMode = "dark" | "light";

interface ThemeState {
  mode: ThemeMode;
}

const initialState: ThemeState = {
  mode: (localStorage.getItem("theme") as ThemeMode) || "dark",
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.mode = state.mode === "dark" ? "light" : "dark";
      localStorage.setItem("theme", state.mode);
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
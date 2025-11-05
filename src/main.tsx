import React from "react";
import ReactDOM from "react-dom/client";
import { Provider }from "react-redux";
import { store } from "./Store/store";
import ThemedApp from "./Components/ThemeProvider";



ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemedApp />
    </Provider>
  </React.StrictMode>
);


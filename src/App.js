import React from "react";
import "./styles.css";
import { ThemeProvider } from "emotion-theming";

import TodoList from "./pages/TodoList";

const theme = {
  color: {
    primary: {
      red: "#e71700"
    }
  },
  background: {
    color: {
      primary: "#f1d592"
    }
  }
};

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <TodoList />
    </ThemeProvider>
  );
}

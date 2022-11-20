import { ThemeProvider } from "styled-components";
import { useState } from "react";
import { defaultTheme } from "./styles/themes/default";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <h1>hello world</h1>;
    </ThemeProvider>
  );
}

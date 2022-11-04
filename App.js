import * as React from "react";
import { ThemeProvider } from "react-native-magnus";

import Main from "./Main";
import "./styles/global.css";

export default function App() {
  return (
    <ThemeProvider>
      <Main />
    </ThemeProvider>
  );
}

import * as React from "react";
import { ThemeProvider } from "react-native-magnus";
import { RootSiblingParent } from "react-native-root-siblings";
import Main from "./Main";
// import "./styles/global.css";

export default function App() {
  return (
    <RootSiblingParent>
      <ThemeProvider>
        <Main />
      </ThemeProvider>
    </RootSiblingParent>
  );
}

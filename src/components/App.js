import React from "react";
import {
  createMuiTheme,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core/styles";
import Header from "../components/ui/Header";

function App() {
  return (
    <ThemeProvider>
      <Header />
      hello
    </ThemeProvider>
  );
}

export default App;

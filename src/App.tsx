import * as React from "react";
import { ExtendedThemeContext } from "./StateManagement/ExtendedThemeProvider";
import MainScreen from "./Views/OnBoard/Main/MainScreen";
import { Route, Routes } from "react-router-dom";
import { Container,  ThemeProvider } from "@mui/material";

function App() {
  const { theme } = React.useContext(ExtendedThemeContext);
  return (
    <Container>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/bjs-portofolio/*" element={<MainScreen />} />
        </Routes>
      </ThemeProvider>
    </Container>
  );
}

export default App;

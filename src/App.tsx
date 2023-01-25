import React from "react";
import { TheemeProvider } from "./StateManagement/ThemeProvider";
import MainScreen from "./Views/OnBoard/Main/MainScreen";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route
        path="/bjs-portofolio"
        element={
          <TheemeProvider>
            <MainScreen />
          </TheemeProvider>
        }
      />
    </Routes>
  );
}

export default App;

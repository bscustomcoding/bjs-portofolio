import React from 'react';
import { TheemeProvider } from './StateManagement/ThemeProvider';
import MainScreen from './Views/OnBoard/Main/MainScreen';

function App() {
  return  <TheemeProvider>
    <MainScreen />
  </TheemeProvider>
}

export default App;

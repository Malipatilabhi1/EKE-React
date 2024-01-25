
import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import { ThemeProvider } from './Components/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <div className="app-container">
        <Header />
        <div className="content-container">
          <Home />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;

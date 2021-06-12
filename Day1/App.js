import React from "react";
import logo from './logo.svg';
import './App.css';
import Documentation from "./Documentation";

function App() {
  const headerText="Hello Youtube from my variable";
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{headerText}</p>
      </header>
    </div>
  );
}

export default App;

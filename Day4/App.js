// import logo from './logo.svg';
import './App.css';
import React from 'react';
import FunctionClick from './components/FunctionClick';
import CFunctionClick from './components/CFunctionClick';

// Class Component
class App extends React.Component
{
  render(){
    return (
      <div className="App">    
        <FunctionClick/>
        <CFunctionClick roll="22"/>
      </div>
    );
  }
}

export default App;

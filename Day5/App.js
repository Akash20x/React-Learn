// import logo from './logo.svg';
import './App.css';
import React from 'react';
import CHeader from './components/CHeader';
import FunctionClick from './components/FunctionClick';
import CFunctionClick from './components/CFunctionClick';

// Class Component
class App extends React.Component
{
  render(){
    const numbers=[3,4,5,6];
    return (
      <div className="App">
        <CHeader name="Akash" last="Jain"></CHeader>
        <FunctionClick/>
        <CFunctionClick numbers={numbers}/>
      </div>
    );
  }
}

export default App;

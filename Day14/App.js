import './App.css';
import React from 'react';
import FunctionCounterOne from './components/FunctionCounterOne';
import ClassCounterOne from './components/ClassCounterOne';
import ClassMouse from './components/ClassMouse';
import HookMouse from './components/HookMouse';

// Class Component
class App extends React.Component
{
  render(){
    return (
      <div className="App">
      <ClassCounterOne></ClassCounterOne>
      <FunctionCounterOne></FunctionCounterOne>
      <ClassMouse></ClassMouse>
      <HookMouse></HookMouse>
      </div>
    );
  }
}

export default App;

import './App.css';
import React from 'react';
import HookCounter from './components/HookCounter';
import Hookobject from './components/Hookobject';
import HookArray from './components/HookArray';
import FunctionCounterOne from './components/FunctionCounterOne';
import ClassCounterOne from './components/ClassCounterOne';

// Class Component
class App extends React.Component
{
  render(){
    return (
      <div className="App">
      <HookCounter></HookCounter>
      <Hookobject></Hookobject>
      <HookArray></HookArray>
      <FunctionCounterOne></FunctionCounterOne>
      <ClassCounterOne></ClassCounterOne>
      </div>
    );
  }
}

export default App;

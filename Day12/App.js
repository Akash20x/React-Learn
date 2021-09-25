import './App.css';
import React from 'react';
import HookCounter from './components/HookCounter';
import Counter from './components/Counter';

// Class Component
class App extends React.Component
{
  render(){
    return (
      <div className="App">
      <Counter></Counter>
      <HookCounter></HookCounter>
      </div>
    );
  }
}

export default App;

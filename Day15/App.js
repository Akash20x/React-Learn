import './App.css';
import React from 'react';
import A from './components/A';

// Class Component
class App extends React.Component
{
  render(){
    return (
      <div className="App">
      <A></A>
      </div>
    );
  }
}

export default App;

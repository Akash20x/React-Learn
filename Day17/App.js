import './App.css';
import React from 'react';
import Ajay from './components/Ajay';
import Vikas from './components/Vikas';
import Sushant from './components/Sushant';

// Class Component
class App extends React.Component
{
  render(){
    return (
      <div className="App">
      <Ajay></Ajay>
      <Vikas></Vikas>
      <Sushant></Sushant>
      </div>
    );
  }
}

export default App;

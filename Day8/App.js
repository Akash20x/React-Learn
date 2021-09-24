import './App.css';
import React from 'react';
import Form from './components/Form';
import Routing from './components/Routing';

// Class Component
class App extends React.Component
{
  render(){
    return (
      <div className="App">
      <Form></Form>
      <Routing></Routing>
      </div>
    );
  }
}

export default App;

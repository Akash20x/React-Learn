import './App.css';
import React from 'react';
import LifeCycleA from './components/LifeCycleA';
import Product from './components/Product';

// Class Component
class App extends React.Component
{
  render(){
    return (
      <div className="App">
      <LifeCycleA></LifeCycleA>
      <Product></Product>
      </div>
    );
  }
}

export default App;

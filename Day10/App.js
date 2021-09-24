import './App.css';
import React from 'react';
import Product from './components/Product';

// Class Component
class App extends React.Component
{
  render(){
    return (
      <div className="App">
      <Product></Product>
      </div>
    );
  }
}

export default App;

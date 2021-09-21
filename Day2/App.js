// import logo from './logo.svg';
import './App.css';
import React from 'react';
import {Header} from './components/Header';
import CHeader from './components/CHeader';

// Class Component
class App extends React.Component
{
  render(){
    return (
      <div className="App">
        <Header/>
        <CHeader/>
      </div>
    );
  }
}

export default App;

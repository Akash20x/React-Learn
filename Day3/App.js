// import logo from './logo.svg';
import './App.css';
import React from 'react';
import {Header} from './components/Header';
import CHeader from './components/CHeader';
import Channel from './components/Channel';
import FunctionClick from './components/FunctionClick';
import CFunctionClick from './components/CFunctionClick';

// Class Component
class App extends React.Component
{
  render(){
    return (
      <div className="App">
        <Header name="Anuj" last="sharma">
        <p>Anuj is a good boy</p>
        </Header>
        <Header name="Vivek" last="verma">
        </Header>
        <Header name="rahul"/>
        <CHeader name="Akash" last="Jain"></CHeader>
        <Channel/>
        <FunctionClick/>
        <CFunctionClick/>
      </div>
    );
  }
}

export default App;

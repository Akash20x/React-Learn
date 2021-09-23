// import logo from './logo.svg';
import './App.css';
import React from 'react';
import Stylesheet from './components/Stylesheet';
import Inline from './components/Inline';
import './appstyle.css';
import Style from './appstyle.module.css';

// Class Component
class App extends React.Component
{
  render(){
    return (
      <div className="App">
      <h1 className={Style.success}>Green</h1>
      <h1 className='error'>Error</h1>
      <Stylesheet isvalue={false}></Stylesheet>
      <Inline></Inline>    
      </div>
    );
  }
}

export default App;

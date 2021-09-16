import logo from './logo.svg';
import './App.css';
import React from 'react';

// With jsx
const text = <span>Hello React</span>;

// Without jsx
const elem = React.createElement('h2',{className:'elem'},'Hello H2 Tag');

const test=() => {
  alert("Hello Akash")
}

const age=function(a){
  if(a>8){
    return <span>You are eligible</span>
   }else{
     return <span>You are not eligible</span>     
  }
}

// Function Component
function App() {
  return (
    <div className="App">
    <h1>Hello Akash,{text}</h1>
     {elem}
     <button onClick={test}></button>
      {age(19)}
    </div>
  );
}

// Class Component
class App extends React.Component
{
  render(){
    return <h1>Hello, class component</h1>
  }
}

export default App;

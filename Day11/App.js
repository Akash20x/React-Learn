import './App.css';
import React from 'react';
import PostList from './components/PostList';
import PostForm from './components/PostForm';

// Class Component
class App extends React.Component
{
  render(){
    return (
      <div className="App">
      <PostForm></PostForm>
      <PostList></PostList>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import CreatePost from './components/CreatePost';
import PostList from './components/PostList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <CreatePost />
        <PostList />
      </div>
    );
  }
}

export default App;

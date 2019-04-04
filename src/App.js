import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="Container">
        <div className="title">
          <h1>Markdown Previewer</h1>
        </div>
        <div id="main">
          <textarea id="editor" placeholder="enter text" />
        </div>
        <div id="preview">Preview Area</div>
      </div>
    );
  }
}

export default App;

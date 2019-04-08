import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import marked from 'marked';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'Type **Something**'
    };

    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  getMarkdown() {
    var rawMarkup = marked(this.state.value, { sanitize: true });
    return { __html: rawMarkup };
  }
  //* dsadsa *//
  render() {
    return (
      <div className="Container">
        <div className="title">
          <h1>Markdown Previewer</h1>
        </div>
        <div id="main">
          <textarea
            id="editor"
            placeholder="enter text"
            defaultValue={this.state.value}
            onChange={this.handleChange}
          />
        </div>
        <div id="preview" dangerouslySetInnerHTML={this.getMarkdown()} />
      </div>
    );
  }
}

export default App;

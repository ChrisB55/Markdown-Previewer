import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import marked from 'marked';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: `# H1
## H2
### H3
 **bold** 
 > Block Quote element
 
\`<div>Code Element</div>\`, 
> Block Quote element

\`\`\`
// multi-line code element:

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { some.value }
\`\`\`
  


 [inline-style link ](https://www.google.com)


1. List item
1. Another List Item 



![Cat](https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=65&w=94)
`
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

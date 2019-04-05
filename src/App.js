class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };

    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.setState({ value: e.target.value });
  }

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
        <div id="preview">{this.state.value}</div>
      </div>
    );
  }
}

export default App;

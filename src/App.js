import { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "Prakhar from state",
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Hi {this.state.name}</p>
          <button
            onClick={() => {
              // this.setState can also be called as this.setState((state, props) => {}, () => {} ); 
              // where the second argument is the completion callback
              this.setState({ name: "Prakhar from JS" }); // this is async for react
            }}
          >
            Change name
          </button>
        </header>
      </div>
    );
  }
}

export default App;

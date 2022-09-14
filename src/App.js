import { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: []
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((users) => this.setState(() => {
      return {monsters: users}
    }, () => {
      console.log('State -', this.state);
    }))
  }

  render() {
    return (
      <div className="App">
        {
          this.state.monsters.map((monster) => { 
            // key is needed by React under the hood to keep track of that element in case it needs updation
            return <div key={monster.id}><h1>{monster.name}</h1></div>;
           })
        }
      </div>
    );
  }
}

export default App;

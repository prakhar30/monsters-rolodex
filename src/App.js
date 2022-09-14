import { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [
        {
          name: 'Linda',
          id: '1231'
        },
        {
          name: 'Frank',
          id: '1232'
        },
        {
          name: 'Jacky',
          id: '1233'
        },
        {
          name: 'Prakhar',
          id: '1234'
        }
      ]
    };
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

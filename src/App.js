import { Component } from "react";

import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  // Available on all class methods
  // Instantiate any variable in it
  constructor(props) {
    super(); // Whenever you write constructor you have to write super()

    this.state = {
      name: 'Ravi Ranjan'
    };
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Hi! {this.state.name}</p>

          {/**
            Event Handler: Allows to handle an event based on the requirement.

            Shallow Merge: Looks for the keys in the current state and decides based on the keys match 
                           whether it should update the state or not.

            With this.state = {name: 'Ravi', workAt: 'Antino'}, this.setState({name: 'Ravi Ranjan'}) -> will only update
            the name and left the workAt key. This is the shallow merge. Only updates the key that matches in the setState.
          */} 
          <button onClick={() => {
            this.setState({
              name: "Ravi Ranjan Singh"
            })
          }}>Change Name</button>
        </header>
      </div>
    );
  }
}

export default App;

/* eslint-disable no-lone-blocks */
import { Component } from "react";

// import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(props) {
    super();

    this.state = {
      monsters: [],
      searchField: "",
    };

    console.log("constructor");
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState(() => {
          return { monsters: users };
        })
      );
    console.log("ComponentDidMount");
  }

  onSearchChange = (e) => {
    const searchField = e.target.value.toLowerCase();

    this.setState(() => {
      return { searchField };
    });
  };

  render() {
    console.log("Renderer");

    // Destructuring: helps in reducing the use of this keyword.
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;

    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField);
    });

    return (
      <div className="App">
        <input
          className="search-box"
          type="search"
          placeholder="Search Monsters"
          onChange={onSearchChange}
        />
        {filteredMonsters.map((monster, index) => {
          return <h1 key={index}>{monster.name}</h1>;
        })}
      </div>
    );
  }
}

export default App;

/* eslint-disable no-lone-blocks */
import { Component } from "react";

// import logo from "./logo.svg";
import "./App.css";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

class App extends Component {
  constructor(props) {
    super();

    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState(() => {
          return { monsters: users };
        })
      );
  }

  onSearchChange = (e) => {
    const searchField = e.target.value.toLowerCase();

    this.setState(() => {
      return { searchField };
    });
  };

  render() {
    // Destructuring: helps in reducing the use of this keyword.
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;

    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField);
    });

    return (
      <div className="App">
        <SearchBox onChangeHandler={onSearchChange} placeholder={'Search Monsters...'} className={'search-box'}/> 
        {//filteredMonsters.map((monster, index) => {
          //return <h1 key={index}>{monster.name}</h1>;
        //})
        }
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;

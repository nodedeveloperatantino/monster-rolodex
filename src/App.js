/* eslint-disable no-lone-blocks */
import { Component } from "react";

// import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  // Available on all class methods
  // Instantiate any variable in it
  // Whenever a component mounts or when a page loads this constructor is the first thing that will run...
  constructor(props) {
    super(); // Whenever you write constructor you have to write super()

    // First Iteration: Understanding State and useState methods
    // this.state = {
    //   name: 'Ravi Ranjan'
    // };

    // Second Iteration: Understanding Array Map and Keys in React
    //Instantiating the monsters state
    // this.state = {
    //   monsters: [
    //     {
    //       name: "Inevitable Thanos",
    //       id: 1
    //     },
    //     {
    //       name: "Gorr: The God Butcher",
    //       id: 2
    //     },
    //     {
    //       name: "Loki: God of Mischiefs",
    //       id: 3
    //     },
    //     {
    //       name: "Hela: The Goddess of Death",
    //       id: 4
    //     },
    //   ],
    // };

    // Third iteration Working with APIs and Lifecycle methods.
    // Initialised empty state for monsters array:

    this.state = {
      monsters: [],
      searchField: ''
    };

    console.log("constructor");
  }

  // How to get monsters list of array from the API which has to be done while the application loads.
  // The following code runs when the application loads for the first time.
  // This following function is the function which runs at the end of the program sequence. When it runs it
  // fetches data updates the state and invokes the render function in order to update the UI of the application.
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

  // Render is the function which runs the after the constructor runs. and after this function runs the
  // componentDidMount runs after which the state changes and the render again runs in order to update the UI
  // of the application.
  render() {
    console.log("Renderer");

    const filteredMonsters = this.state.monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(this.state.searchField);
    });

    return (
      <div className="App">
        {/**
            Event Handler: Allows to handle an event based on the requirement.

            Shallow Merge: Looks for the keys in the current state and decides based on the keys match 
                           whether it should update the state or not.

            With this.state = {name: 'Ravi', workAt: 'Antino'}, this.setState({name: 'Ravi Ranjan'}) -> will only update
            the name and left the workAt key. This is the shallow merge. Only updates the key that matches in the setState.

            Can break the working of the application so must be updated uniformly.

              The following setState runs asynchronously so if we add console.log(this.state) after the setState 
              it won't log the updated state instead it will log the earlier state.

              To get the synchronous behavior of setState then we must use function in setState as follows:
                this.setState((state, props) => {
                  return: {
                    name: "Name",
                    company: "Company",
                  }
                }, () => {
                  console.log(this.state);
                })
            */}

        {
          /*
            <h1>{this.state.monsterOne.name}</h1>
            <h1>{this.state.monsterTwo.name}</h1>
            <h1>{this.state.monsterThree.name}</h1>
            
            The above code segment can be written in an optimized manner by using the array map function
            as written below
          */
        }

        <input
          className="search-box"
          type="search"
          placeholder="Search Monsters"
          /**
           * The following function is created every time it gets rendered and as this function
           * is not changing on every render so it can be used to optimize our current implementation.
           * So, it would be good if we put this method in the component instead of putting in the 
           * render function.
           */
          onChange={(e) => {
            const searchField = e.target.value.toLowerCase();

            this.setState(() => {
              return { searchField };
            })
          }}
        />

        {filteredMonsters.map((monster, index) => {
          return <h1 key={index}>{monster.name}</h1>;
        })}
      </div> 
    );
  }
}

export default App;

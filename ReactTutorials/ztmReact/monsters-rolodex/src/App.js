import { Component } from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import './App.css';



class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    }
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) =>
        this.setState(
          () => {
            return { monsters: users };
          },

        ))
  }
  onSearchChange = (event) => {
    // console.log(event.target.value);
    const searchField = event.target.value.toLocaleLowerCase();
    // the filetered monsters will give us a new array 


    this.setState(() => {
      return { searchField };
    })
  }
  render() {
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;
    const filteredMonsters = this.state.monsters.filter((monster) => {
      //give the name of the monster with the help of the include method 
      // so what it will do is that if it icludes that string it will return true and then we can filter out the result according to out requirement
      return monster.name.toLocaleLowerCase().includes(searchField);
    });
    return (
      <div className="App">
        <div className="app-title">Monsters Rolodex</div>
        <SearchBox
          className="monsters-search-box"
          onChangeHandler={onSearchChange}
          placeholder="search monsters" />
        <CardList monsters={filteredMonsters} />

      </div>
    );
  }

}

export default App;

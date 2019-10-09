import React, { Component } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';
class App extends Component {
  constructor() {
    super();
    this.state = {
      string: 'Hello',
      monsters: [
      ],
      searchField: ''
    };
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({monsters: users}));
  }
  handleChange(e) {}
  render() {
    const {monsters, searchField} = this.state;
    const filterSearch = monsters.filter(monsters => 
      monsters.name.toLowerCase().includes(searchField.toLowerCase()));


    return (
      <div className="App">
      <h1>Monters Relodex</h1>
      <SearchBox placeholder='Search' 
      handleChange = {e => this.setState({ searchField: e.target.value })}/>
      <CardList monsters={filterSearch}/>

      </div>
    )
  }
}

export default App;

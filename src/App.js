import React, { Component } from 'react';
import './App.css';
class App extends Component {
  constructor() {
    super();
    this.state = {
      string: 'Hello',
      monsters: [
        // {
        //   name: 'Frankenstein',
        //   id: 'WPF1'
        // },
        // {
        //   name: 'Dracula',
        //   id: 'WPF2'

        // },
        // {
        //   name: 'Zombie',
        //   id: 'WPF3'
        // },
        // {
        //   name: 'Wolf Man',
        //   id: 'WPF4'
        // },
      ]
    };
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({monsters: users}));
  }
  render() {
    return (
      <div className="App">
        {
          this.state.monsters.map(m => <h1 key={m.id}>{m.name}</h1>)
        }
      </div>
    )
  }
}

export default App;

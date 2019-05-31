import React, { Component } from 'react';
import './App.css';
import StarWarsCharacterList from './components/StarWarsCharacterList'

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      pageNumber: 1
    };
  }

  componentDidMount() {
    this.getCharacters(`https://swapi.co/api/people/?page=${this.state.pageNumber}`);
  };

  nextPage = event => {
    event.preventDefault();
    if(this.state.pageNumber < 9) {
      this.setState({pageNumber: parseInt(`${this.state.pageNumber + 1}`)})
      this.getCharacters(`https://swapi.co/api/people/?page=${this.state.pageNumber}`)
    }
  };

  previousPage = event => {
    event.preventDefault();
    if(this.state.pageNumber > 1) {
      this.setState({pageNumber: parseInt(`${this.state.pageNumber - 1}`)})
      this.getCharacters(`https://swapi.co/api/people/?page=${this.state.pageNumber}`)
    }
  };

  getCharacters = URL => {
    console.log(URL)
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    console.log(fetch(URL).then(res => res.json()));
    fetch(URL)
    .then(URL)
      .then(res => res.json())
      .then(data => this.setState({ starwarsChars: data.results }))
      .catch(err => {
        throw new Error(err);
      });
  };

  render() {
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <StarWarsCharacterList characterListProperty={this.state.starwarsChars} nextProperty={this.nextPage} previousProperty={this.previousPage} pageProperty={this.state.pageNumber}/>
      </div>
    );
  }
}

export default App;
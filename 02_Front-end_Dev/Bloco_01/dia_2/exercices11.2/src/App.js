import React from 'react';
import './App.css';
import Pokedex from './pokedex'
import pokemon from './data'

class App extends React.Component {
  render() {
      return (
        pokemon.map(elm => <Pokedex key={elm.id} pokemon={elm}/>) 
    );
  }
}

export default App;

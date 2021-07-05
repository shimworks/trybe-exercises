import React from 'react';
import './App.css';
import PokeInfo from './PokeInfo'
import pokemons from './data';
import Pokedex from './Pokedex';
import { BrowserRouter, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <h1> Pokedex </h1>
    <Route exact path="/" render={(props) => <Pokedex {...props} pokemons={pokemons}/>}/>
    <Route path="/pokemons/:id" render={(props) => <PokeInfo {...props} pokemons={pokemons}/>}/>
    </div>
    </BrowserRouter>
  );
}

export default App;
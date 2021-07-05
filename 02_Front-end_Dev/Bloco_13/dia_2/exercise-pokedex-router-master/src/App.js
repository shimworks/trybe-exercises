import React from 'react';
import './App.css';
import PokeInfo from './PokeInfo'
import pokemons from './data';
import Pokedex from './Pokedex';
import About from './About';
import PageNotFound from './PageNotFound'
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
    <Link to="/">Home</Link>
    <br/>
    <Link to="/about">About</Link>
    <div className="App">
      <h1> Pokedex </h1>
      <Switch>
        <Route exact path="/" render={(props) => <Pokedex {...props} pokemons={pokemons}/>}/>
        <Route path="/pokemons/:id" render={(props) => <PokeInfo {...props} pokemons={pokemons}/>}/>
        <Route path="/about" component={About}/>
        <Route path="/" component={PageNotFound}/>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
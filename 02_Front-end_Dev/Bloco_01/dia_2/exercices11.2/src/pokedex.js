import { Component } from "react";
import { number, string, shape } from 'prop-types';

class Pokedex extends Component {
  render() {
    const { pokemon } = this.props
    return (
      <div className='Cont' key={pokemon.id}>
        <div className='ContInner'>
        <h1>{pokemon.name}</h1>
        <p>{pokemon.type}</p>
        <p>{pokemon.averageWeight.value}
        {pokemon.averageWeight.measurementUnit}</p>
        </div>
        <img src={pokemon.image} alt={pokemon.name}/>
      </div>
    )
  }
}

Pokedex.propTypes = {
  pokemon: shape({
    name: string,
    type: string,
    averageWeight: shape({
      value: number,
      measurementUnit: string,
    }),
    image: string,
  }) 
};


export default Pokedex
import React, { Component } from 'react';

class PokeInfo extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      poke: undefined
     }
     this.findPoke = this.findPoke.bind(this)
  }

  findPoke() {
    const { id } = this.props.match.params
    const { pokemons } = this.props
    this.setState({
      poke: pokemons.find((elm) =>elm.id === Number(id))
    }, () => console.log(this.state))
  }

  componentDidMount() {
    this.findPoke()
  }

  render() {
    const { poke } = this.state
    console.log(poke)
    {return poke ? <img src={poke.image} alt="pokemon"/> : <div>{"KD o pokemon"}</div>}

  }
}
 
export default PokeInfo;
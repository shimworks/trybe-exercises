import React from 'react';

class Radio extends React.Component {
  render(){
    const { handlerOne } = this.props
    return (
      <div>
        <input type="radio" id="Casa" name="home" value="casa" onChange={handlerOne}></input>
        <label htmlFor="Casa">Casa</label>
        <input type="radio" id="Apartamento" name="home" value="apartamento"onChange={handlerOne}></input>
        <label htmlFor="Apartamento">Apartamento</label>
      </div>
    )
  }
}

export default Radio
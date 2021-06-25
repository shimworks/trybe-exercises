import React from 'react';

class Radio extends React.Component {
  render(){
    const { handlerOne } = this.props
    return (
      <div>
        <label htmlFor="Casa">
        <input type="radio" id="Casa" name="home" value="casa" onChange={handlerOne} required/>
        Casa
        </label>
        <label htmlFor="Apartamento">
        <input type="radio" id="Apartamento" name="home" value="apartamento"onChange={handlerOne} />
        Apartamento
        </label>
      </div>
    )
  }
}

export default Radio
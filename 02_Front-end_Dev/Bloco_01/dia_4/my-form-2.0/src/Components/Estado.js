import React from 'react';

class Estado extends React.Component {
  render(){
    const { handlerOne, value } = this.props
    return (
      <label>
        <select name="estado" value={value} onChange={handlerOne}>
          <option value="Parana">Paraná</option>
          <option value="Pará">Pará</option>
          <option value="SaoPaulo">São Paulo</option>
        </select>
      </label> 
    )
  }
}

export default Estado
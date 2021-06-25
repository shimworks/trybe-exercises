import React from 'react';

class Name extends React.Component {
  render(){
    const { handlerOne, value } = this.props
    return (
      <label>
      Name:
      <input maxLength='40'name="name" value={value} onChange={handlerOne}></input>
      </label> 
    )
  }
}

export default Name
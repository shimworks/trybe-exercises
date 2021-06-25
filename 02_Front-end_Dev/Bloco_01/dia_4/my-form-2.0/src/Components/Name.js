import React from 'react';

class Name extends React.Component {
  render(){
    const { handlerOne, value } = this.props
    return (
      <label>
      Name:
      <input required maxLength='40'name="name" value={value} onChange={handlerOne}/>
      </label> 
    )
  }
}

export default Name
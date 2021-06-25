import React from 'react';
import Name from './Name';
import Estado from './Estado';
import Radio from './Radio';

class Pai extends React.Component {
  constructor(){
    super();
    this.state = {
      name: '',
      estado: '',
      home: '',
    }
  }

  handlerOne = ({ target }) => {
    const {name, value} = target
    this.setState ({
      [name]: value.toUpperCase(),
    })
  }

  render(){
    return(
      <fieldset>
        <Name value={this.state.name} handlerOne={this.handlerOne}/>
        <Estado handlerOne={this.handlerOne}/>
        <Radio handlerOne={this.handlerOne} />
      </fieldset>
    )
  }
}

export default Pai
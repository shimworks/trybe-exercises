import React from 'react';
import Name from './Name';
import Estado from './Estado';
import Radio from './Radio';

class Pai extends React.Component {
  constructor(){
    super();
    this.state = {
      name: '',
      estado: 'PARANA',
      home: '',
      click: false,
      disable: true,
    }
  }

  handlerOne = ({ target }) => {
    const {name, value} = target
    this.setState ({
      [name]: value.toUpperCase(),
      click: false
    }, () => this.checkFilled())
  }

  showMe = () => {
    this.setState ({
      click: true
    })
  }

  print = () => {
    const { name, estado, home} = this.state
    return (
      <div>
        <p>{name}</p>
        <p>{estado}</p>
        <p>{home}</p>
      </div>
    )
  }
  
  onSubmitForm = (elm) => {
    elm.preventDefault();
  }

  clear = () => {
    this.setState ({
      name: '',
      estado: 'PARANA',
      home: '',
      click: false,
      disable: true,
    })
  }

  checkFilled = () => {
    const { home, name } = this.state
    this.setState({disable: home && name ? false : true})
  }

  render(){
    return(
      <main>
        <form onSubmit={this.onSubmitForm}>
          <fieldset>
            <Name value={this.state.name} handlerOne={this.handlerOne} />
            <Estado handlerOne={this.handlerOne}/>
            <Radio handlerOne={this.handlerOne} />
          </fieldset>
          <button disabled={this.state.disable} onClick={this.showMe}>Show Me!</button>
          <div> {this.state.click ? this.print() : ''} </div>
          <button onClick={this.clear}>Clear</button>
        </form>
      </main>
    )
  }
}

export default Pai
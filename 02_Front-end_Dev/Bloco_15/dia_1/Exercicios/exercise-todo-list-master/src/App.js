import React, { Component } from 'react';
import InputTodo from './InputTodo';
import Item from './Item';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      listTodo: [],
      eraseIndex: [],
    };

    this.addTodo = this.addTodo.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.eraseList = this.eraseList.bind(this);

  }

  addTodo(todo) {
    this.setState((state) => ({ listTodo: [...state.listTodo, todo] }));
  }

  eraseList() {
    const { eraseIndex } = this.state
    const newList = this.state.listTodo
    eraseIndex.sort((a, b) => b - a)
    eraseIndex.forEach((elm) =>  newList.splice(elm, 1))
    this.setState({
      listTodo: newList,
      eraseIndex: [],
    })
  }

  handleClick(index) {
    const {eraseIndex} = this.state
    this.setState({
      eraseIndex: [...new Set ([...eraseIndex, index])]
    })
  }

  render() {
    const { listTodo } = this.state;
    return (
      <div className="App">
        <InputTodo addTodo={(todo) => this.addTodo(todo)} />
        <button onClick={this.eraseList}>apaga</button>
        {listTodo &&
          <ul>
            {
              listTodo.map((todo, index) => (
                <li key={index + 1}>
                  <Item content={todo} index={index} handleClick={this.handleClick}/>
                </li>
              ))
            }
          </ul>
        }
      </div>
    );
  }
}
export default App;

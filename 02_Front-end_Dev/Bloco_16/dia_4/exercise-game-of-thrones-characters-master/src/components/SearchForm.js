import React from 'react';
import propTypes from 'prop-types';
import charAPI from '../services/charAPI'
import './SearchForm.css';
import { connect } from 'react-redux';
import func from '../actions/index'

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: '',
      characterSearched: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.submitName = this.submitName.bind(this);
  }

handleChange(e) {
  this.setState({
    inputText: e.target.value,
    characterSearched: '',
  })
}

submitName(e) {
  e.preventDefault();
  const { inputText } = this.state;
  const { disp } = this.props;
  //desestruture a ação do thunk como propriedade aqui

  this.setState({
    inputText: '',
    characterSearched: inputText,
  })
  // insira a action a ser despachada para o thunk
  disp(inputText);
}

render() {
  const { inputText } = this.state;
  return (
    <div>
      <form onSubmit={this.submitName}>
        <h1>Type a character below:</h1>
        <input onChange={this.handleChange} 
        placeholder="Enter Character"
        value={inputText}
        />
        <div className="buttonSection">
          <button className="submitButton" type="submit" >Search!</button>
        </div>
      </form>
    </div>
  )
}
};

const mapDispatch = (dispatch) => ({
  disp: (value) => dispatch(func(value))
})


export default connect(null, mapDispatch)(SearchForm);

//faça as proptypes da ação oriunda do thunk


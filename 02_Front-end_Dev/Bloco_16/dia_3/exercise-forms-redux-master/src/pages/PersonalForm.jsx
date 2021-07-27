import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { personalAction } from '../redux/actions/action';

class PersonalForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      cpf: '',
      adress: '',
      city: '',
      state: '',
    };
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput({ target: { name, value } }) {
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { name, email, cpf, adress, city, state } = this.state;
    // eslint-disable-next-line react/prop-types
    const { chave } = this.props;
    return (
      <fieldset>
        <form>
          <input type="text" name="name" value={ name } onChange={ this.handleInput } />
          <input type="text" name="email" value={ email } onChange={ this.handleInput } />
          <input type="number" name="cpf" value={ cpf } onChange={ this.handleInput } />
          <input
            type="text"
            name="adress"
            value={ adress }
            onChange={ this.handleInput }
          />
          <input type="text" name="city" value={ city } onChange={ this.handleInput } />
          <label htmlFor="state">
            <select
              name="state"
              id="state"
              value={ state }
              onChange={ this.handleInput }
            >
              <option value="Estado1">Estado1</option>
              <option value="Estado2">Estado2</option>
              <option value="Estado3">Estado3</option>
            </select>
          </label>
          <Link
            to="/professionalForm"
            onClick={ () => chave(this.state) }
            type="button"
          >
            Enviar
          </Link>
        </form>
      </fieldset>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  chave: (value) => dispatch(personalAction(value)),
});

export default connect(null, mapDispatchToProps)(PersonalForm);

import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { professionalAction } from '../redux/actions/action';

class ProfessionalForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      resum: '',
      cargo: '',
      description: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.passoamais = this.passoamais.bind(this);
  }

  handleChange({ target: { name, value } }) {
    this.setState({
      [name]: value,
    });
  }

  passoamais() {
    // eslint-disable-next-line react/prop-types
    const { disProf } = this.props;
    disProf(this.state);
  }

  render() {
    const { resum, cargo, description } = this.state;
    return (
      <fieldset>
        <form>
          <textarea
            name="resum"
            cols="30"
            rows="10"
            style={ { resize: 'none' } }
            value={ resum }
            onChange={ this.handleChange }
          />
          <input
            type="text"
            name="cargo"
            value={ cargo }
            onChange={ this.handleChange }
          />
          <textarea
            name="description"
            cols="20"
            rows="10"
            style={ { resize: 'none' } }
            value={ description }
            onChange={ this.handleChange }
          />
          <Link
            to="/formDisplay"
            onClick={ this.passoamais }
          >
            Enviar

          </Link>
        </form>
      </fieldset>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  disProf: (value) => dispatch(professionalAction(value)),
});

export default connect(null, mapDispatchToProps)(ProfessionalForm);

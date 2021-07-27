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
  }

  handleChange({ target: { name, value } }) {
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { resum, cargo, description } = this.state;
    // eslint-disable-next-line react/prop-types
    const { disProf } = this.props;
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
            onClick={ () => disProf(this.state) }
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

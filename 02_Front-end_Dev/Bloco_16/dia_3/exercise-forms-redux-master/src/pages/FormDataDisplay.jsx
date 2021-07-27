/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';

class FormDataDisplay extends React.Component {
  render() {
    // eslint-disable-next-line react/prop-types
    const { name } = this.props;
    return (
      <p>{ name }</p>

    );
  }
}

const mapStateToProps = (state) => ({
  name: state.personalReducer.name,
  email: state.personalReducer.email,
  cpf: state.personalReducer.cpf,
  adress: state.personalReducer.adress,
  city: state.personalReducer.city,
  state: state.personalReducer.state,
  resum: state.professionalReducer.resum,
  cargo: state.professionalReducer.cargo,
  description: state.professionalReducer.description,
});

export default connect(mapStateToProps, null)(FormDataDisplay);

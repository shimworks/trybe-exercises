const INITIAL_STATE = {
  name: '',
  email: '',
  cpf: '',
  adress: '',
  city: '',
  state: '',
};

const personalReducer = (states = INITIAL_STATE, action) => {
  const { name, email, cpf, adress, city, state } = action;
  switch (action.type) {
  case 'Personal_Form':
    return {
      ...states,
      name,
      email,
      cpf,
      adress,
      city,
      state,
    };
  default:
    return states;
  }
};

export default personalReducer;

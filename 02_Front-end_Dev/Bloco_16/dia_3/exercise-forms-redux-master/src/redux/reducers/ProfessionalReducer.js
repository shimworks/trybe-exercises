const INITIAL_STATE = {
  resum: '',
  cargo: '',
  description: '',
};

const professionalReducer = (state = INITIAL_STATE, action) => {
  const { resum, cargo, description } = action;
  switch (action.type) {
  case 'Professional_Form':
    return {
      ...state,
      resum,
      cargo,
      description,
    };
  default:
    return state;
  }
};

export default professionalReducer;

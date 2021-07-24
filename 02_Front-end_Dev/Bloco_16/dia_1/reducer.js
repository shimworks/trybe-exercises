const INITIAL_STATE = [

];

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'Action':
    return [...state, action.value]
    default:
      return state
  }
}
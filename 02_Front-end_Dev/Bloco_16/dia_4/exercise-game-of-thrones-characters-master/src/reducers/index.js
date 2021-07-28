const INITIAL_STATE = {
  character: '',
  loading: false,
  error: null,
}

const reducer = (state = INITIAL_STATE, action) => {
  const { loading, error, character} = action
  switch (action.type) {
    case 'CHARACTER':
      return {
        ...state,
        character,
        loading,
      }
      case 'ERROR':
      return {
        ...state,
        error,
        loading,
      }
      case 'LOADING':
        return {
          ...state,
          loading,
        }
      default:
        return state;
  }
}

export default reducer;
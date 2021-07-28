import charAPI from '../services/charAPI'

const func = name => async (dispatch) => {
  dispatch(load());
    try {
      const result = await charAPI(name)
      dispatch(charAction(...result))
    }
    catch (error) {
      dispatch(errorAction(error))
    }
}

const load = () => ({
  type: 'LOADING',
  loading: true,
})

const errorAction = (error) => ({
  type: 'ERROR',
  error,
  loading: false,
})


const charAction = (character) => ({
  type: 'CHARACTER',
  character: character,
  loading: false,
});

export default func;
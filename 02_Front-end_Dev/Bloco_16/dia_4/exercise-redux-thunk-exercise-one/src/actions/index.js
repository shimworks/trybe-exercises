export const REQUEST_API = 'REQUEST_API';
export const GET_PICTURE = 'GET_PICTURE';

export const requestAPI = () => ({ type: REQUEST_API });

export const getPicture = (data) => ({ type: GET_PICTURE, data });

// export function fetchAPI() {
//   return (dispatch) => {
//     dispatch(requestAPI());
//     fetch('https://aws.random.cat/meow')
//     .then((response) => response.json())
//     .then((cat) => dispatch(getPicture(cat)))
//   }
// }

export const fetchAPI = () => async (dispatch) => {
  dispatch(requestAPI());
  let request = await fetch('https://aws.random.cat/meow');
  request = await request.json();
  dispatch(getPicture(request));
};
import { combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import personalReducer from '../reducers/PersonalReducer';
import professionalReducer from '../reducers/ProfessionalReducer';

const rootReducer = combineReducers({ personalReducer, professionalReducer });

const store = createStore(rootReducer, composeWithDevTools());

export default store;

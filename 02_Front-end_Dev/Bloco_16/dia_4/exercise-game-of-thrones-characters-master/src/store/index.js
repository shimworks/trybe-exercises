//importe o método applyMiddleware 
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from '../reducers';
import {composeWithDevTools} from 'redux-devtools-extension'

//aplique o middleware
const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;

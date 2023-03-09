import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'; // allows you to write action creators that return a function instead of an action
import rootReducer from '../reducer/reducer';

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk)) //conecta herramienta redux-thunk 
 );
 
 export default store;
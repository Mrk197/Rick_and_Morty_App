import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'; // allows you to write action creators that return a function instead of an action
import rootReducer from '../reducer/reducer';

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk)) //conecta herramienta redux-thunk 
 );
 
 export default store;

 /*
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducer';
import thunk from 'redux-thunk';

const composeEnhancers =
    (typeof window !== 'undefined' &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
    compose;

const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk)),

);

 

export default store; */

/*
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducer';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancer(applyMiddleware(thunk)));

export default store;*/
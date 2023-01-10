import { legacy_createStore,applyMiddleware,combineReducers, compose } from 'redux'
import thunk from 'redux-thunk'

import Auth_Reducer from './Authreducer/Auth_Reducer';
import { AppReducer } from './AppReducer/AppReducer';


const rootRuducer = combineReducers({Auth_Reducer,AppReducer})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = legacy_createStore(rootRuducer,composeEnhancers(applyMiddleware(thunk)));
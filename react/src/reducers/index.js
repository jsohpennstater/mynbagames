import { combineReducers } from 'redux';
import { firstnameReducer, lastnameReducer, tokenReducer, errorReducer } from './ApiReducers';

let reducers = combineReducers({
  firstnameState: firstnameReducer,
  lastnameState: lastnameReducer,
  tokenState: tokenReducer,
  errorState: errorReducer,
});

export default reducers;

import { combineReducers } from 'redux';
import { firstnameReducer, lastnameReducer, playerReducer, errorReducer } from './ApiReducers';

let reducers = combineReducers({
  firstnameState: firstnameReducer,
  lastnameState: lastnameReducer,
  playerState: playerReducer,
  errorState: errorReducer,
});

export default reducers;

import { combineReducers } from 'redux';
import { firstnameReducer, lastnameReducer, playerReducer, errorReducer, allPlayersReducer } from './ApiReducers';

let reducers = combineReducers({
  firstnameState: firstnameReducer,
  lastnameState: lastnameReducer,
  playerState: playerReducer,
  errorState: errorReducer,
  allPlayers: allPlayersReducer
});

export default reducers;

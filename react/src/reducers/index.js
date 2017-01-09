import { combineReducers } from 'redux';
import { firstnameReducer, lastnameReducer, playerReducer, errorReducer, allPlayersReducer, firstMatchReducer, lastMatchReducer } from './ApiReducers';

let reducers = combineReducers({
  firstnameState: firstnameReducer,
  lastnameState: lastnameReducer,
  playerState: playerReducer,
  errorState: errorReducer,
  allPlayers: allPlayersReducer,
  firstNameMatch: firstMatchReducer,
  lastNameMatch: lastMatchReducer
});

export default reducers;

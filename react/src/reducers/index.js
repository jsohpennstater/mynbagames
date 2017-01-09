import { combineReducers } from 'redux';
import { errorReducer, allPlayersReducer, firstMatchReducer, lastMatchReducer } from './ApiReducers';

let reducers = combineReducers({
  errorState: errorReducer,
  allPlayers: allPlayersReducer,
  firstNameMatch: firstMatchReducer,
  lastNameMatch: lastMatchReducer
});

export default reducers;

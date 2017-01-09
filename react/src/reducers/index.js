import { combineReducers } from 'redux';
import { errorReducer, allPlayersReducer} from './ApiReducers';

let reducers = combineReducers({
  errorState: errorReducer,
  allPlayers: allPlayersReducer,
});

export default reducers;

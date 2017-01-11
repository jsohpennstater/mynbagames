import { combineReducers } from 'redux';
import { errorReducer, allPlayersReducer} from './PlayerIndexReducers';
import { seasonAverageReducer, boxScoreReducer, playerProfileReducer  } from './PlayerShowReducers'

let reducers = combineReducers({
  errorState: errorReducer,
  allPlayers: allPlayersReducer,
  seasonAvgState: seasonAverageReducer,
  boxScoreState: boxScoreReducer,
  playerProfileState: playerProfileReducer
});

export default reducers;

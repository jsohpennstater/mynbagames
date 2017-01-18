import { combineReducers } from 'redux';
import { errorReducer, allPlayersReducer} from './PlayerIndexReducers';
import { seasonAverageReducer, boxScoreReducer, playerProfileReducer, gamesReducer  } from './PlayerShowReducers'

let reducers = combineReducers({
  errorState: errorReducer,
  allPlayers: allPlayersReducer,
  seasonAvgState: seasonAverageReducer,
  boxScoreState: boxScoreReducer,
  playerProfileState: playerProfileReducer,
  allGames: gamesReducer
});


export default reducers;

export const seasonAverageReducer = (state="", action) => {
  switch (action.type) {
    case "SEASON_AVERAGE":
      return action.seasonaverage
    default:
      return state
  }
}

export const boxScoreReducer = (state="", action) => {
  switch (action.type) {
    case "PLAYER_BOXSCORE":
      return action.boxscore
    default:
      return state
  }
}

export const playerProfileReducer = (state="", action) => {
  switch (action.type) {
    case "PLAYER_PROFILE":
      return action.player
    default:
      return state
  }
}

export const gamesReducer = (state="", action) => {
  switch (action.type) {
    case "PLAYER_GAMES":
      return action.games
    default:
      return state
  }
}

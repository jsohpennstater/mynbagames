export const allPlayersReducer = (state="", action) => {
  switch (action.type) {
    case "ALL_PLAYERS_INFO":
      return action.players
    default:
      return state
  }
}

export const errorReducer = (state="", action) => {
  switch (action.type) {
    case "ERROR":
      return action.error
    default:
      return state
  }
}

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

export const firstMatchReducer = (state="", action) => {
  switch (action.type) {
    case "FIRST_NAME_MATCH":
      return action.firstnamematch
    default:
      return state
  }
}

export const lastMatchReducer = (state="", action) => {
  switch (action.type) {
    case "LAST_NAME_MATCH":
      return action.lastnamematch
    default:
      return state
  }
}

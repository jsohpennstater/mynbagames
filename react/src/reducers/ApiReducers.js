export const firstnameReducer = (state="", action) => {
  switch (action.type) {
    case "FIRSTNAME_CHANGE":
      return action.firstname
    default:
      return state
  }
}

export const lastnameReducer = (state="", action) => {
  switch (action.type) {
    case "LASTNAME_CHANGE":
      return action.lastname
    default:
      return state
  }
}

export const playerReducer = (state="", action) => {
  switch (action.type) {
    case "PLAYER_INFO":
      return action.player
    default:
      return state
  }
}

export const errorReducer = (state="", action) => {
  switch (action.type) {
    case "ERROR":
      return "No Matches, Please Try Again!"
    default:
      return state
  }
}

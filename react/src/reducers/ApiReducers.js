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

export const tokenReducer = (state=sessionStorage.getItem("token"), action) => {
  switch (action.type) {
    case "TOKEN":
      return action.token
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

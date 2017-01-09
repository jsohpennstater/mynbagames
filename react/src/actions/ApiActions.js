export const SearchPlayer = () => {
  return (dispatch, getState) => {
    let state = getState()
    let firstname = state.firstnameState.trim()
    let lastname = state.lastnameState.trim()
    let url = 'api/v1/players/placeholder'
    $.ajax({
    method: 'GET',
    url: url,
    data: {
      firstname: firstname,
      lastname: lastname
    },
    error: function () {
      dispatch(NoMatch("No Matches, Please Try Again!"));
    },
    success: function(data) {
      if (data.player !== null) {
        dispatch(PlayerInfo(data.player));
        dispatch(NoMatch(""));
      } else if (data.player === null) {
        dispatch(NoMatch("No Matches, Please Try Again!"));
        dispatch(PlayerInfo(""));
      }
    }
  })

  }
}

export const AllPlayers = () => {
  return (dispatch, getState) => {
    let url = 'api/v1/players'
    $.ajax({
    method: 'GET',
    url: url,
    error: function () {
      dispatch(NoMatch("No Matches, Please Try Again!"));
    },
    success: function(data) {
      dispatch(Players(data.players));
    }
  })

  }
}

export const FirstNameMatch = (firstname) => {
  return (dispatch) => {
    let url = 'api/v1/names'
    dispatch(AddFirstName(firstname.trim()))
    if (firstname.length > 1) {
      $.ajax({
        method: 'GET',
        url: url,
        data: {
          first_name: firstname
        },
        error: function () {
        },
        success: function(data) {
          dispatch(FirstMatch(data.matchingfirst));
        }
      })
    }
  }
}

export const LastNameMatch = (lastname) => {
  return (dispatch) => {
    let url = 'api/v1/names';
    dispatch(AddLastName(lastname.trim()));
    if (lastname.length > 1) {
      $.ajax({
        method: 'GET',
        url: url,
        data: {
          last_name: lastname
        },
        error: function () {
        },
        success: function(data) {
          dispatch(LastMatch(data.matchinglast));
        }
      })
    }
  }
}

export const AddFirstName = (firstname) => {
  return {
    type: "FIRSTNAME_CHANGE",
    firstname
  }
}

export const AddLastName = (lastname) => {
  return {
    type: "LASTNAME_CHANGE",
    lastname
  }
}

export const NoMatch = (error) => {
  return {
    type: "ERROR",
    error
  }
}

export const PlayerInfo = (player) => {
  return {
    type: "PLAYER_INFO",
    player
  }
}

export const Players = (players) => {
  return {
    type: "ALL_PLAYERS_INFO",
    players
  }
}

export const FirstMatch = (firstnamematch) => {
  return {
    type: "FIRST_NAME_MATCH",
    firstnamematch
  }
}

export const LastMatch = (lastnamematch) => {
  return {
    type: "LAST_NAME_MATCH",
    lastnamematch
  }
}

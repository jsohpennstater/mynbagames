
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

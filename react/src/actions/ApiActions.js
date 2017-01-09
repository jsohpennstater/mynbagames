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
    let url = 'api/v1/names';
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
          dispatch(Players(data.first))
        }
      })
    }
  }
}

export const LastNameMatch = (lastname) => {
  return (dispatch) => {
    let url = 'api/v1/names';
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
          dispatch(Players(data.last))
        }
      })
    }
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

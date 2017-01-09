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

export const NameMatch = (name) => {
  return (dispatch) => {
    let url = 'api/v1/names';
    if (name.trim().length > 1) {
      $.ajax({
        method: 'GET',
        url: url,
        data: {
          name: name
        },
        error: function () {
        },
        success: function(data) {
          dispatch(Players(data.matchingname))
        }
      })
    } else {
      $.ajax({
        method: 'GET',
        url: 'api/v1/players',
        error: function () {
        },
        success: function(data) {
          dispatch(Players(data.players))
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

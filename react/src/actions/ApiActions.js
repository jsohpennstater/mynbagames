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

export const PlayerInfo = (id) => {
  return (dispatch, getState) => {
    let url = `api/v1/players/${id}`;
    $.ajax({
    method: 'GET',
    url: url,
    error: function () {
      dispatch(NoMatch("No Matches, Please Try Again!"));
    },
    success: function(data) {
      dispatch(Average(data.season_average));
      dispatch(PlayerProfile(data.player));
      dispatch(BoxScore(data.stats))
    }
  })

  }
}

export const Players = (players) => {
  return {
    type: "ALL_PLAYERS_INFO",
    players
  }
}

export const NoMatch = (error) => {
  return {
    type: "ERROR",
    error
  }
}

export const Average = (seasonaverage) => {
  return {
    type: "SEASON_AVERAGE",
    seasonaverage
  }
}

export const PlayerProfile = (player) => {
  return {
    type: "PLAYER_PROFILE",
    player
  }
}

export const BoxScore = (boxscore) => {
  return {
    type: "PLAYER_BOXSCORE",
    boxscore
  }
}

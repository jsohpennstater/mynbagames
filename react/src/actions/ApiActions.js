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
    let firstname = state.firstnameState
    let lastname = state.lastnameState
    let url = 'api/v1/players'
    $.ajax({
    method: 'GET',
    url: url,
    data: {
      firstname: firstname,
      lastname: lastname
    },
    error: function () {
      dispatch(NoMatch())
    },
    success: function(data) {
    dispatch(PlayerInfo(data.player));
    }
  })

  }
}

export const NoMatch = () => {
  return {
    type: "ERROR"
  }
}

export const PlayerInfo = (player) => {
  return {
    type: "PLAYER_INFO",
    player
  }
}

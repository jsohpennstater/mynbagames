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

export const GetToken = () => {
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
      dispatch(SignInValid(data.jwt));
      sessionStorage.setItem("token", data.jwt);
    }
  })

  }
}


export const NoMatch = () => {
  return {
    type: "ERROR"
  }
}

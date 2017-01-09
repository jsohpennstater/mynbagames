import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NoMatch, AllPlayers, Players, FirstNameMatch, LastNameMatch } from '../actions/ApiActions'
import PlayerSearch from '../components/PlayerSearch'

class ApiContainer extends Component {

  componentDidMount() {
    this.props.allPlayers();
  }

  render() {
    return (
      <PlayerSearch
       handleFirstMatch={this.props.handleFirstMatch}
       handleLastMatch={this.props.handleLastMatch}
       error={this.props.error}
       playerinfo={this.props.playerinfo}
       players={this.props.players}
       firstNameMatch={this.props.firstNameMatch}
       lastNameMatch={this.props.lastNameMatch}
      />
    )
  }
}

const mapStoreToProps = store => {
  return {
    error: store.errorState,
    playerinfo: store.playerState,
    players: store.allPlayers,
    firstNameMatch: store.firstNameMatch,
    lastNameMatch: store.lastNameMatch
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleSubmit: (event) => {
      dispatch(SearchPlayer())
    },
    allPlayers: (event) => {
      dispatch(AllPlayers())
    },
    handleFirstMatch: (event) => {
      let firstname = event.target.value
      dispatch(FirstNameMatch(firstname))
    },
    handleLastMatch: (event) => {
      let lastname = event.target.value
      dispatch(LastNameMatch(lastname))
    },
  }
}

export default connect(mapStoreToProps, mapDispatchToProps)(ApiContainer);

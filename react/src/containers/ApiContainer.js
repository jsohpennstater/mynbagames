import React, { Component } from 'react'
import { connect } from 'react-redux'
import { AddFirstName, AddLastName, SearchPlayer, NoMatch, AllPlayers, Players } from '../actions/ApiActions'
import PlayerSearch from '../components/PlayerSearch'

class ApiContainer extends Component {
  render() {
    return (
      <PlayerSearch
       handleFirstName={this.props.handleFirstName}
       handleLastName={this.props.handleLastName}
       handleSubmit={this.props.handleSubmit}
       error={this.props.error}
       playerinfo={this.props.playerinfo}
       allPlayers={this.props.allPlayers}
       players={this.props.players}
      />
    )
  }
}

const mapStoreToProps = store => {
  return {
    error: store.errorState,
    playerinfo: store.playerState,
    players: store.allPlayers
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleFirstName: (event) => {
      let firstname = event.target.value
      dispatch(AddFirstName(firstname))
    },
    handleLastName: (event) => {
      let lastname = event.target.value
      dispatch(AddLastName(lastname))
    },
    handleSubmit: (event) => {
      dispatch(SearchPlayer())
    },
    allPlayers: (event) => {
      dispatch(AllPlayers())
    }
  }
}

export default connect(mapStoreToProps, mapDispatchToProps)(ApiContainer);

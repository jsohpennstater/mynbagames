import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NoMatch, AllPlayers, Players, NameMatch, PlayerInfo, Average, PlayerProfile, BoxScore } from '../actions/ApiActions'
import PlayerSearch from '../components/PlayerSearch'

class PlayersContainer extends Component {

  componentDidMount() {
    this.props.allPlayers();
  }

  render() {
    return (
      <PlayerSearch
       handleNameMatch={this.props.handleNameMatch}
       handleLink={this.props.handleLink}
       error={this.props.error}
       players={this.props.players}
      />
    )
  }
}

const mapStoreToProps = store => {
  return {
    error: store.errorState,
    playerinfo: store.playerState,
    players: store.allPlayers,
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
    handleNameMatch: (event) => {
      let name = event.target.value;
      dispatch(NameMatch(name))
    },
    handleLink: (event) => {
      let id = event.target.value;
      dispatch(PlayerInfo(id))
    }
  }
}

export default connect(mapStoreToProps, mapDispatchToProps)(PlayersContainer);

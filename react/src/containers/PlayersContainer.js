import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NoMatch, AllPlayers, Players, NameMatch} from '../actions/ApiActions'
import PlayerSearch from '../components/Index/PlayerSearch'

class PlayersContainer extends Component {

  componentDidMount() {
    this.props.allPlayers();
  }

  render() {
    return (
      <PlayerSearch
       handleNameMatch={this.props.handleNameMatch}
       error={this.props.error}
       playerinfo={this.props.playerinfo}
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
      debugger;
      let name = event.target.value
      dispatch(NameMatch(name))
    }
  }
}

export default connect(mapStoreToProps, mapDispatchToProps)(PlayersContainer);

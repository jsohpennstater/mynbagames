import React, { Component } from 'react'
import { connect } from 'react-redux'
import { PlayerInfo, Average, PlayerProfile, BoxScore } from '../actions/ApiActions'
import PlayerShow from '../components/PlayerShow'

class PlayerContainer extends Component {

  componentDidMount() {
    this.props.handlePlayerInfo();
  }

  render() {
    return (
      <PlayerShow
       seasonAverage={this.props.seasonAverage}
       playerProfile={this.props.playerProfile}
       playerBoxScore={this.props.playerBoxScore}
       games={this.props.games}
      />
    )
  }
}

const mapStoreToProps = store => {
  return {
    seasonAverage: store.seasonAvgState,
    playerProfile: store.playerProfileState,
    playerBoxScore: store.boxScoreState,
    games: store.allGames,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handlePlayerInfo: (event) => {
      let id = window.location.pathname.split("/")[2]
      dispatch(PlayerInfo(id))
    }
  }
}

export default connect(mapStoreToProps, mapDispatchToProps)(PlayerContainer);

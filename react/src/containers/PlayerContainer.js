import React, { Component } from 'react'
import { connect } from 'react-redux'
import PlayerShow from '../components/PlayerShow'

class PlayerContainer extends Component {

  render() {
    return (
      <PlayerShow
       seasonAverage={this.props.seasonAverage}
       playerProfile={this.props.playerProfile}
       playerBoxScore={this.props.playerBoxScore}
      />
    )
  }
}

const mapStoreToProps = store => {
  return {
    seasonAverage: store.seasonAvgState,
    playerProfile: store.playerProfileState,
    playerBoxScore: store.boxScoreState,
  }
}

const mapDispatchToProps = dispatch => {
  return {

  }
}

export default connect(mapStoreToProps, mapDispatchToProps)(PlayerContainer);

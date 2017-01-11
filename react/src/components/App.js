import React, { Component } from 'react'
import { connect } from 'react-redux'
import PlayersContainer from '../containers/PlayersContainer'
import PlayerContainer from '../containers/PlayerContainer'
import { Router, Route, browserHistory } from 'react-router'


class App extends Component {
  render() {
    let pathname = window.location.pathname;
    return (
      <Router history={browserHistory}>
        <Route path="/" component={PlayersContainer}/>
        <Route path="/players/:playerId" component={PlayerContainer}/>
      </Router>
    )
  }
}

const mapStateToProps = store => {
  return {
  }
}

const mapDispatchToProps = dispatch => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

import React, { Component } from 'react'
import GameSearch from './GameSearch'
import { connect } from 'react-redux'

class App extends Component {
  render() {
    return (
      <div>
        <h1>GameSearch</h1>
        <GameSearch dispatch={this.props.dispatch}/>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return state
}

export default connect(mapStateToProps)(App)

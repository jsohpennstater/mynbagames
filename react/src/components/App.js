import React, { Component } from 'react'
import { connect } from 'react-redux'
import ApiContainer from '../containers/ApiContainer'

class App extends Component {
  render() {
    return (
      <ApiContainer/>
    )
  }
}

const mapStateToProps = store => {
  return {
    token: store.tokenState
  }
}

const mapDispatchToProps = dispatch => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

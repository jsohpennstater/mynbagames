import React, { Component } from 'react'

class GameSearch extends Component {

  constructor(props) {
    super(props);
    this.state = {
      day: "",
      games: [],
    };

    this.handleSelectGame = this.handleSelectGame.bind(this);
    this.handleSelectDay = this.handleSelectDay.bind(this);
  };

  handleSelectGame(e) {

  }

  handleSelectDay(e) {
  }

  render() {
    return (
      <div className="row leaderboardstat">
        <p>Game Search</p>
        <div className="small-12 medium-6 columns week-selection-div">
          <label><b>Day</b></label>
          <select name="selectDay" onChange={this.handleSelectDay}>
            <option key={1}> Select Day </option>
          </select>
        </div>
        <div className="small-12 medium-6 end columns game-selection-div">
          <label><b>Game</b></label>
          <select name="selectGame" onChange={this.handleSelectGame}>
            <option key={1}> Select Game </option>
          </select>
        </div>
      </div>
    )
  }
}

export default GameSearch

import React from 'react';
import SeasonAverage from './SeasonAverage'
import BoxScore from './BoxScore'
import PlayerProfile from './PlayerProfile'

const PlayerShow = props => {
  let seasonAverage = "";
  let playerProfile = "";
  let boxScore = "";

  if (props.seasonAverage !== "") {
    seasonAverage =
      <SeasonAverage
       average={props.seasonAverage}
      />
  }

  if (props.playerProfile !== "") {
    playerProfile =
      <PlayerProfile
       profile={props.playerProfile}
      />
  }

  if (props.playerBoxScore !== "") {
    boxScore = props.playerBoxScore.map(Boxscore => {
      return (
        <BoxScore
         key={Boxscore.id}
         boxscore={Boxscore}
        />
      )
    })
  }

  return (
    <div className="player-show">
      <div className="row">
       {playerProfile}
      </div>
      <br></br>
      <div className="season-average row">
        {seasonAverage}
      </div>
      <br></br>
      <div className="row">
        {boxScore}
      </div>
    </div>
  )

}

export default PlayerShow;

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
         boxscore={Boxscore}
        />
      )
    })
  }

  return (
    <div className="row">
     {playerProfile}
     {seasonAverage}
     {boxScore}
    </div>
  )

}

export default PlayerShow;

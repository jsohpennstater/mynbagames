import React from 'react';
import SeasonAverage from './SeasonAverage';
import BoxScore from './BoxScore';
import PlayerProfile from './PlayerProfile';

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
    <div className="player-show mx-5">
      <div className="row">
       {playerProfile}
      </div>
      <br></br>
      <div className="season-average">
        {seasonAverage}
      </div>
      <div className="boxscore-table">
        <p className="font-weight-bold"> GAMELOG </p>
          <table className="table table-hover">
            <thead>
              <tr>
                <th>GAME</th>
                <th>MIN</th>
                <th>FGM - FGA</th>
                <th>FG%</th>
                <th>3PM - 3PA</th>
                <th>3P%</th>
                <th>FTM - FTA</th>
                <th>FT%</th>
                <th>REB</th>
                <th>AST</th>
                <th>BLK</th>
                <th>STL</th>
                <th>TO</th>
                <th>+/-</th>
                <th>PTS</th>
              </tr>
            </thead>
            <tbody>
              {boxScore}
            </tbody>
        </table>
      </div>
    </div>
  )

}

export default PlayerShow;

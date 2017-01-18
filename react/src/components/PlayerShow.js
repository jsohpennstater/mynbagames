import React from 'react';
import SeasonAverage from './SeasonAverage';
import BoxScore from './BoxScore';
import PlayerProfile from './PlayerProfile';
import AllGames from './AllGames';

const PlayerShow = props => {
  let seasonAverage = "";
  let playerProfile = "";
  let boxScore = "";
  let allGames = "";
  let displayBoxscore = "";
  let display = "";

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

  if (props.games !== "") {
    allGames = props.games.map(Game => {
      return (
        <AllGames
         key={Game.id}
         game={Game}
        />
      )
    })
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

  if (props.playerBoxScore !== "" && props.games !== "") {
    for (var i = 0; i < props.playerBoxScore.length; i++) {
      display += '<p> Yo </p>'
    }
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
      <div className="boxscore-table row">
        <p> GAMELOG </p>
        <div className="small-2 medium-2 columns game-display">
          <table>
            <thead>
              <tr>
                <th>GAME</th>
              </tr>
            </thead>
            <tbody>
              {allGames}
            </tbody>
          </table>
        </div>
        <div className="small-10 medium-10 end columns stat-display">
          <table>
            <thead>
              <tr>
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
    </div>
  )

}

export default PlayerShow;

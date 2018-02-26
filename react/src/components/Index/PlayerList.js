import React from 'react';
import PlayerProfile from './PlayerProfile'

const PlayerList = props => {
  let players = "";

  if (props.players !== "" && props.players !== null) {
    players = props.players.map(Player => {
      return (
        <PlayerProfile
         key={Player.id}
         player={Player}
        />
      )
    })
  }

  return (
    <div className="matchingPlayers row">
      {players}
    </div>
  )
}

export default PlayerList;

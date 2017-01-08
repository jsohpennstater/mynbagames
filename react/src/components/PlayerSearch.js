import React from 'react';
import PlayerProfile from './PlayerProfile'
import AllPlayers from './AllPlayers'
import Names from './Names'

const PlayerSearch = props => {
  let playerinfo = "";
  let players = "";
  let names = "";

  if (props.playerinfo !== "" && props.playerinfo !== null) {
    playerinfo =
      <PlayerProfile
      playerinfo={props.playerinfo}
      />
  }

  if (props.players !== "" && props.players !== null) {
    players = props.players.map(Player => {
      return (
        <AllPlayers
         key={Player.id}
         player={Player}
        />
      )
    })
    names = props.players.map(Player => {
      return (
        <Names
         key={Player.id}
         player={Player}
        />
      )
    })
  }

  return (
    <div className="row playersearch">
      <div className="small-12 medium-3 columns">
        <label htmlFor="firstname">First Name</label>
        <input type="text" name="firstname" onChange ={props.handleFirstName}/>
        <label htmlFor="lastname">Last Name</label>
        <input type="text" name="lastname" onChange={props.handleLastName}/>
        <input className="inline text-center button" type="submit" value="Search" onClick={props.handleSubmit}/>
        <p className="inline error">{props.error}</p>
        {playerinfo}
        {names}
      </div>
      <div className="small-12 medium-9 end columns">
        {players}
      </div>
    </div>
  )

}

export default PlayerSearch;

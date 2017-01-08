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
    <div className="row auth">
      <label htmlFor="firstname">First Name</label><br />
      <input type="text" name="firstname" onChange ={props.handleFirstName}/><br />
      <label htmlFor="lastname">Last Name</label><br />
      <input type="text" name="lastname" onChange={props.handleLastName}/><br />
      <input className="inline text-center button" type="submit" value="Search" onClick={props.handleSubmit}/>
      <p className="inline error">{props.error}</p>
      {playerinfo}
      {names}
      {players}
    </div>
  )

}

export default PlayerSearch;

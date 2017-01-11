import React from 'react';
import AllPlayers from './AllPlayers'
import Names from './Names'

const PlayerSearch = props => {
  let players = "";
  let names = "";

  if (props.players !== "" && props.players !== null) {
    players = props.players.map(Player => {
      return (
        <AllPlayers
         key={Player.id}
         player={Player}
         handleLink={props.handleLink}
        />
      )
    })
    names = props.players.map(Player => {
      return (
        <Names
         key={Player.id}
         player={Player}
         handleLink={props.handleLink}
        />
      )
    })
  }

  return (
    <div className="row playersearch">
      <div className="small-12 medium-3 columns">
        <label htmlFor="firstname">Name Search</label>
        <input type="text" name="name" onChange ={props.handleNameMatch}/>
          {names}
      </div>
      <div className="small-12 medium-9 end columns">
        {players}
      </div>
    </div>
  )

}

export default PlayerSearch;

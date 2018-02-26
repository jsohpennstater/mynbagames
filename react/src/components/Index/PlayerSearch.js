import React from 'react';
import AllPlayers from './AllPlayers'
import Names from './Names'

const PlayerSearch = props => {
  debugger;
  let players = "";
  let names = "";

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
    <div className="players">
      <div className="playersearch input-group">
        <div className="input-group col-md-4 mt-3 mb-3 container">
          <input
           placeholder="Search Player Name ..."
           className="form-control"
           onChange ={props.handleNameMatch}
          />
          <button type="submit"
           className="btn btn-primary"
          >
           Search
          </button>
        </div>
      </div>
      <div className="matchingPlayers row">
        {players}
      </div>
    </div>
  )

}

export default PlayerSearch;

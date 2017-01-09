import React from 'react';
import AllPlayers from './AllPlayers'
import Names from './Names'

const PlayerSearch = props => {
  let players = "";
  let names = "";
  let matchingFirstNames = "";
  let matchingLastNames = "";

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

  if (props.firstNameMatch.length !== 0) {
    matchingFirstNames = props.firstNameMatch.map(name => {
      return(
        <option value={name}></option>
      )
    });
  }

  if (props.lastNameMatch.length !== 0) {
    matchingLastNames = props.lastNameMatch.map(name => {
      return(
        <option value={name}></option>
      )
    });
  }

  return (
    <div className="row playersearch">
      <div className="small-12 medium-3 columns">
        <label htmlFor="firstname">First Name</label>
        <input type="text" name="firstname" onChange ={props.handleFirstMatch} list='searchFirstName'/>
          <datalist id='searchFirstName'>
            {matchingFirstNames}
          </datalist>
        <label htmlFor="lastname">Last Name</label>
        <input type="text" name="lastname" onChange={props.handleLastMatch} list='searchLastName'/>
          <datalist id='searchLastName'>
            {matchingLastNames}
          </datalist>
        {names}
      </div>
      <div className="small-12 medium-9 end columns">
        {players}
      </div>
    </div>
  )

}

export default PlayerSearch;

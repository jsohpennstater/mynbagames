import React from 'react';

const GameSearch = props => {
  
  return (
    <div className="row auth">
      <label htmlFor="firstname">First Name</label><br />
      <input type="text" name="firstname" onChange ={props.handleFirstName}/><br />
      <label htmlFor="lastname">Last Name</label><br />
      <input type="text" name="lastname" onChange={props.handleLastName}/><br />
      <input className="inline text-center button" type="submit" value="Search" onClick={props.handleSubmit}/>
      <p className="inline error">{props.error}</p>
      <p> {props.playerinfo.first_name} {props.playerinfo.last_name} </p>
      <p> {props.playerinfo.team} {props.playerinfo.position} {props.playerinfo.number} </p>
    </div>
  )

}

export default GameSearch;

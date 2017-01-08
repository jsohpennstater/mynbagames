import React from 'react';

const PlayerProfile = props => {

  return (
    <div>
      <p> {props.playerinfo.first_name} {props.playerinfo.last_name} {props.playerinfo.number} </p>
      <p> Team: {props.playerinfo.team}, Position: {props.playerinfo.position} </p>
      <p> College: {props.playerinfo.college} </p>
      <p> Draft: {props.playerinfo.draft} </p>
      <p> Height: {props.playerinfo.height}, Weight: {props.playerinfo.weight} </p>
      <p> Birthday: {props.playerinfo.born}, Birthplace: {props.playerinfo.birthplace} </p>
      <img src= {props.playerinfo.image} className="player-image"/>
    </div>
  )

}

export default PlayerProfile;

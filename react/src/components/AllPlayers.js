import React from 'react';

const AllPlayers = props => {

  return (
    <div>
      <p> {props.player.first_name} {props.player.last_name} {props.player.number} </p>
      <p> Team: {props.player.team}, Position: {props.player.position} </p>
      <p> Height: {props.player.height}, Weight: {props.player.weight} </p>
      <img src= {props.player.image} className="player-image"/>
    </div>
  )

}

export default AllPlayers;

import React from 'react';

const AllPlayers = props => {
  let player_id = props.player.id
  return (
    <div className="small-12 medium-3 end columns player-display">
      <img src= {props.player.image} className="player-image"/>
      <p><a href={'/players/' + player_id}>{props.player.first_name} {props.player.last_name}</a> {props.player.number}</p>
      <p> Position: {props.player.position} </p>
      <p> Height: {props.player.height} | Weight: {props.player.weight} </p>
      <p> Team: {props.player.team} </p>
    </div>
  )

}

export default AllPlayers;

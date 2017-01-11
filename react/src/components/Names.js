import React from 'react';

const Names = props => {
  let player_id = props.player.id;
  return (
    <div>
      <p><a href={'/players/' + player_id} value={player_id} onClick={props.handleLink}>{props.player.last_name}, {props.player.first_name}</a> ({props.player.team})</p>
    </div>
  )

}

export default Names;

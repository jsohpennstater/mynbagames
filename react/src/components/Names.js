import React from 'react';

const Names = props => {

  return (
    <div>
      <p> {props.player.last_name}, {props.player.first_name} Team: {props.player.team} </p>
    </div>
  )

}

export default Names;

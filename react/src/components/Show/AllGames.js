import React, { Component } from 'react'

const AllGames = props => {
   let date = props.game.gamecode.slice(4,6) + "/" + props.game.gamecode.slice(6,8);
  return (
    <tr>
      <td>
        <span> <img src= {props.game.away_pic} className="team-image"/> </span>
        <span> @ <img src= {props.game.home_pic} className="team-image"/> </span>
        <span> ({date}) </span>
      </td>
    </tr>
  )

}

export default AllGames;

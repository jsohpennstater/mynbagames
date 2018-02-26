import React, { Component } from 'react'

const PlayerProfile = props => {
  return (
    <div className="profile">
      <div className="player-bio col-md-12 mt-2">
        <h3> {props.profile.first_name} {props.profile.last_name} </h3>
        <p> {props.profile.number} {props.profile.position} | {props.profile.height}, {props.profile.weight} lbs | {props.profile.team} </p>
        <p> Born: {props.profile.born} in {props.profile.birthplace}</p>
        <p> Drafted: {props.profile.draft} </p>
        <p> College: {props.profile.college} </p>
      </div>
    </div>
  )
}

export default PlayerProfile;

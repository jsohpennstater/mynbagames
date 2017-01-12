import React, { Component } from 'react'

const PlayerProfile = props => {
  return (
    <div className="profile row">
      <div className="small-12 medium-8 end columns">
        <p> {props.profile.first_name} {props.profile.last_name} </p>
        <p> {props.profile.number} {props.profile.position} | {props.profile.height}, {props.profile.weight} lbs | {props.profile.team} </p>
        <p> Born: {props.profile.born} in {props.profile.birthplace}</p>
        <p> Drafted: {props.profile.draft} </p>
        <p> College: {props.profile.college} </p>
      </div>
    </div>
  )
}

export default PlayerProfile;

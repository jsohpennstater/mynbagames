import React, { Component } from 'react'

const PlayerProfile = props => {
  return (
    <div className="profile">
      <p> {props.profile.first_name} {props.profile.last_name}</p>
      <p> {props.profile.team} </p>
      <p> {props.profile.number} </p>
      <p> {props.profile.height} </p>
      <p> {props.profile.weight} </p>
      <p> {props.profile.position} </p>
      <p> {props.profile.college} </p>
      <p> {props.profile.draft} </p>
      <img src= {props.profile.image} className="player-image"/>
    </div>
  )
}

export default PlayerProfile;

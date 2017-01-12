import React, { Component } from 'react'

const PlayerProfile = props => {
  return (
    <div className="profile">
      <p> {props.profile.team} {props.profile.number} | {props.profile.position} </p>
      <p> {props.profile.first_name} {props.profile.last_name}</p>
      <img src= {props.profile.image}/>
      <p> {props.profile.height} </p>
      <p> {props.profile.weight} </p>
      <p> {props.profile.position} </p>
      <p> {props.profile.college} </p>
      <p> {props.profile.draft} </p>
    </div>
  )
}

export default PlayerProfile;

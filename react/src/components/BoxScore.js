import React, { Component } from 'react'

const BoxScore = props => {

  return (
    <div className="boxscore">
      <p> Points: {props.boxscore.points} </p>
      <p> Rebounds: {props.boxscore.total_rebound} </p>
      <p> Assits: {props.boxscore.assist} </p>
      <p> Steals: {props.boxscore.steal} </p>
      <p> Blocks: {props.boxscore.block} </p>
      <p> Minutes Per Game: {props.boxscore.min} </p>
      <p> FG: {props.boxscore.fgm} / {props.boxscore.fga}</p>
      <p> FT: {props.boxscore.ftm} / {props.boxscore.fta} </p>
      <p> THREE: {props.boxscore.threepm} / {props.boxscore.threepa} </p>
    </div>
  )
}

export default BoxScore;

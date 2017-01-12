import React, { Component } from 'react'

const BoxScore = props => {

  return (
    <div className="boxscore">
      <span> Gamecode: {props.boxscore.gamecode}, </span>
      <span> Minutes Per Game: {props.boxscore.min}, </span>
      <span> Points: {props.boxscore.points}, </span>
      <span> Rebounds: {props.boxscore.total_rebound}, </span>
      <span> Assits: {props.boxscore.assist}, </span>
      <span> Steals: {props.boxscore.steal}, </span>
      <span> Blocks: {props.boxscore.block}, </span>
      <span> FG: {props.boxscore.fgm} / {props.boxscore.fga}, </span>
      <span> FT: {props.boxscore.ftm} / {props.boxscore.fta}, </span>
      <span> THREE: {props.boxscore.threepm} / {props.boxscore.threepa} </span>
    </div>
  )
}

export default BoxScore;

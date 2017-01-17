import React, { Component } from 'react'

const BoxScore = props => {

  return (
    <tr>
      <td> {props.boxscore.gamecode} </td>
      <td> {props.boxscore.min} </td>
      <td> {props.boxscore.fgm} - {props.boxscore.fga} </td>
      <td> {(props.boxscore.fgm / props.boxscore.fga).toFixed(3)} </td>
      <td> {props.boxscore.threepm} - {props.boxscore.threepa} </td>
      <td> {(props.boxscore.threepm / props.boxscore.threepa).toFixed(3)} </td>
      <td> {props.boxscore.ftm} - {props.boxscore.fta} </td>
      <td> {(props.boxscore.ftm / props.boxscore.fta).toFixed(3)} </td>
      <td> {props.boxscore.total_rebound} </td>
      <td> {props.boxscore.assist} </td>
      <td> {props.boxscore.block} </td>
      <td> {props.boxscore.steal} </td>
      <td> {props.boxscore.turnover} </td>
      <td> {props.boxscore.plus_minus} </td>
      <td> {props.boxscore.points} </td>
    </tr>
  )
}

export default BoxScore;

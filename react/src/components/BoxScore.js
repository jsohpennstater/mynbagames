import React, { Component } from 'react'

const BoxScore = props => {
  let fgp = "";
  let ftp = "";
  let threep = "";

  if (props.boxscore.fgm === "0" && props.boxscore.fga === "0") {
    fgp = (props.boxscore.fgm / props.boxscore.fga).toFixed(3)
  } else {
    fgp = "-";
  }

  if (props.boxscore.ftm === "0" && props.boxscore.fta === "0") {
    ftp = (props.boxscore.ftm / props.boxscore.fta).toFixed(3)
  } else {
    ftp = "-";
  }

  if (props.boxscore.threepm === "0" && props.boxscore.threepa === "0") {
    threep = (props.boxscore.fgm / props.boxscore.fga).toFixed(3)
  } else {
    threep = "-";
  }

  return (
    <tr>
      <td> {props.boxscore.min} </td>
      <td> {props.boxscore.fgm} - {props.boxscore.fga} </td>
      <td> {fgp} </td>
      <td> {props.boxscore.threepm} - {props.boxscore.threepa} </td>
      <td> {ftp} </td>
      <td> {props.boxscore.ftm} - {props.boxscore.fta} </td>
      <td> {threep} </td>
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

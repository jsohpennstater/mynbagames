import React, { Component } from 'react'

const SeasonAverage = props => {
  return (
    <div className="season-average">
      <p> Season Average (2016-2017) </p>
      <span> PPG: {props.average.ppg} </span>
      <span> RPG: {props.average.rpg} </span>
      <span> APG: {props.average.apg} </span>
      <span> MPG: {props.average.mpg} </span>
      <span> SPG: {props.average.apg} </span>
      <span> BPG: {props.average.apg} </span>
      <span> FG%: {props.average.fgp}% </span>
      <span> FT%: {props.average.ftp}% </span>
      <span> 3P%: {props.average.threep}% </span>
    </div>
  )
}

export default SeasonAverage;

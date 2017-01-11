import React, { Component } from 'react'

const SeasonAverage = props => {
  return (
    <div className="season-average">
      <p> PPG: {props.average.ppg} </p>
      <p> RPG: {props.average.rpg} </p>
      <p> APG: {props.average.apg} </p>
      <p> SPG: {props.average.apg} </p>
      <p> BPG: {props.average.apg} </p>
      <p> MPG: {props.average.mpg} </p>
      <p> FPG: {props.average.fgp}% </p>
      <p> FTG: {props.average.ftp}% </p>
      <p> THREE: {props.average.threep}% </p>
    </div>
  )
}

export default SeasonAverage;

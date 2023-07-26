import React from 'react'
import { useState } from 'react'
import './App.css'

const LeftContainer = (props) => {
  const { kilo, pound, stone} = props
  const [kilo2, setKilo2] = useState('');
  const [pound2, setPound2] = useState('');
  const [stone2, setStone2] = useState('');

  const submitConversion = () => {
    setKilo2(kilo);
    setPound2(pound);
    setStone2(stone);
  }

  return (
    <div id="left-container">
      <div id="poundsContainer"  className="resultsContainer">
      <h3 id="poundsResult">Pounds</h3>
      <h4 id="poundsNumber">{pound2}</h4>
      </div>
      <div id="kilosContainer"  className="resultsContainer">
      <h3 id="kilosResult">Kilos</h3>
      <h4 id="kilosNumber">{kilo2}</h4>
      </div>
      <div id="stoneContainer" className="resultsContainer">
      <h3 id="stoneResult">Stone</h3>
      <h4 id="stoneNumber">{stone2}</h4>
      </div>
      <button id="submitbutton" type='button' onClick={submitConversion}>Submit</button>
    </div>
  )
}

export default LeftContainer;
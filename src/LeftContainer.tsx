import React from 'react'
import './App.css'

const LeftContainer = (props) => {
  const { kilo, pound, stone, kilo2, pound2, stone2, setKilo2, setPound2, setStone2} = props

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
    </div>
  )
}

export default LeftContainer;
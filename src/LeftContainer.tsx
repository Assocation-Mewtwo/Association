import React from 'react'
import './App.css'

const LeftContainer = (props) => {
  const { kilo, setKilo, pound, setPound, stone, setStone, sendGrams} = props

  return (
    <div id="left-container">
      <div id="poundsContainer"  className="resultsContainer">
      <h3 id="poundsResult">Pounds</h3>
      <h4 id="poundsNumber">{pound}</h4>
      </div>
      <div id="kilosContainer"  className="resultsContainer">
      <h3 id="kilosResult">Kilos</h3>
      <h4 id="kilosNumber">{kilo}</h4>
      </div>
      <div id="stoneContainer" className="resultsContainer">
      <h3 id="stoneResult">Stone</h3>
      <h4 id="stoneNumber">{stone}</h4>
      </div>
    </div>
  )
}

export default LeftContainer
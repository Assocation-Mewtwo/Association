import React from 'react'
import { useState } from 'react'

const WeightForm = (props) => {
  const { kilo, setKilo, pound, setPound, stone, setStone, sendGrams } = props
  const [stoneInput, setStoneInput] = useState(false);
  const [kiloInput, setKiloInput] = useState(false);
  const [poundsInput, setPoundsInput] = useState(false);

  // form logic to ensure only one weight input will be part of conversion and post request
  const changeKilo = (e) => {
    if (e.target.value.length === 0){
      setStoneInput(false)
      setPoundsInput(false)
    } else {
    setKilo(e.target.value);
    setStoneInput(true)
    setPoundsInput(true)
  }
}
  const changePounds = (e) => {
    if (e.target.value.length === 0){
      setStoneInput(false)
      setKiloInput(false)
    } else {
    setPound(e.target.value);
    setStoneInput(true)
    setKiloInput(true)
  }
}
  const changeStone = (e) => {
    if (e.target.value.length === 0){
      setKiloInput(false)
      setPoundsInput(false)
    } else {
    setStone(e.target.value);
    setPoundsInput(true)
    setKiloInput(true)
  }
}
  
  return (
    <form id="weight-form" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around'  }}>
      <label className='form-label' style={{ display: 'flex', flexDirection: 'column' }}>
        <input type='text' className="weight-input" placeholder="Pounds" onChange={e => changePounds(e)} disabled={poundsInput}></input>
      </label>
        
      <label className='form-label' style={{ display: 'flex', flexDirection: 'column' }}>
        <input type="text" className="weight-input" placeholder="Kilograms" onChange={e => changeKilo(e)}  disabled={kiloInput}/>
      </label>
      
      <label className='form-label' style={{ display: 'flex', flexDirection: 'column'}}>
        <input type="text" className="weight-input" placeholder="Stone" onChange={e => changeStone(e)}  disabled={stoneInput}/>
      </label>

      <button className='formbtn' type='button' onSubmit={sendGrams}>Submit</button>
    </form>
  )
}

export default WeightForm
import React from 'react';
import { useState } from 'react';

const WeightForm = (props) => {
  const { kilo, setKilo, pound, setPound, stone, setStone, sendGrams } = props;
  const [stoneInput, setStoneInput] = useState(false);
  const [kiloInput, setKiloInput] = useState(false);
  const [poundsInput, setPoundsInput] = useState(false);

  // form logic to ensure only one weight input will be part of conversion and post request
  const changeKilo = (e) => {
    if (e.target.value.length === 0) {
      setStoneInput(false);
      setPoundsInput(false);
      setKilo('')
    } else {
      setKilo(e.target.value);
      setStoneInput(true);
      setPoundsInput(true);
    }
  };
  const changePounds = (e) => {
    if (e.target.value.length === 0) {
      setStoneInput(false);
      setKiloInput(false);
      setPound('');
    } else {
      setPound(e.target.value);
      setStoneInput(true);
      setKiloInput(true);
    }
  };
  const changeStone = (e) => {
    if (e.target.value.length === 0) {
      setKiloInput(false);
      setPoundsInput(false);
      setStone('');
    } else {
      setStone(e.target.value);
      setPoundsInput(true);
      setKiloInput(true);
    }
  };

  return (
    <div id="weight-form">
      
      <input type='text' className="weight-input" placeholder="Pounds" onChange={e => changePounds(e)} disabled={poundsInput}></input>
        
      <input type="text" className="weight-input" placeholder="Kilograms" onChange={e => changeKilo(e)}  disabled={kiloInput}/>

      <input type="text" className="weight-input" placeholder="Stone" onChange={e => changeStone(e)}  disabled={stoneInput}/>

      <button className='submitInput' type='button' onClick={sendGrams}>Submit</button>
      
    </div>
  )
}

export default WeightForm;
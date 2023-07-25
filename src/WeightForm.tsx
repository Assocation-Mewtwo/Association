import React from 'react'
import {StyleSheet, View, Text} from 'react-native'
import { useState } from 'react'

const WeightForm = (props) => {
  const [stoneInput, setStoneInput] = useState(false);
  const [kiloInput, setKiloInput] = useState(false);
  const [poundsInput, setPoundsInput] = useState(false);

  

  return (
    <form>
      <label>
        Pounds
        <input type='text' className="pounds" value='text' disabled={poundsInput}></input>
      </label>
        
      <label>
        Kilograms
        <input type="text" className="kilograms" value='text' disabled={kiloInput}/>
      </label>

      <label>
        Stone
        <input type="text" className="stone" value='text' disabled={stoneInput}/>
      </label>

      <button type='button'>Submit</button>
      <button type='button'>Reset</button>
    </form>

  )
}

export default WeightForm
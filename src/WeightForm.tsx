import React from 'react'
import { useState } from 'react'

const WeightForm = (props) => {
<<<<<<< HEAD
  const { kilo, setKilo, pound, setPound, stone, setStone } = props
=======
  const { kilo, setKilo, pound, setPound, stone, setStone, sendGrams } = props
>>>>>>> dev
  const [stoneInput, setStoneInput] = useState(false);
  const [kiloInput, setKiloInput] = useState(false);
  const [poundsInput, setPoundsInput] = useState(false);

<<<<<<< HEAD
=======
  // form logic to ensure only one weight input will be part of conversion and post request
>>>>>>> dev
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
<<<<<<< HEAD

=======
>>>>>>> dev
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
<<<<<<< HEAD

  const HereComeKilosDonald = async () => {
    let body;
    if (kilo){
      body = kilo
    } else if (stone){
      body = stone * 6.35029
    } else if (pound){
      body = pound * 0.453592
    }
      try {
        const response = await fetch('/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({kilos: body}),
        });
        if (response.ok) {
          console.log('Sent to Donald')
        } else {
          console.error('Donald didn\'t get Kilos');
        }
      } catch (error) {
        console.log(error);
      }
    };
  
    const test = () => {
      if (kilo){
        setStone(kilo * 0.157473)
        setPound(kilo * 2.20462)
      } else if (stone){
        setKilo(stone * 6.35029)
        setPound(stone * 14)
      } else if (pound){
        setKilo(pound * 0.453592)
        setStone(pound * 0.0714286)
      }
    }

=======
  
>>>>>>> dev
  return (
    <form id="weight-form" style={{ display: 'flex', flexDirection: 'row', alignItems: 'stretch' }}>
      <label className='form-label' style={{ display: 'flex', flexDirection: 'column' }}>
        <h3>Pounds</h3>
        <input type='text' className="pounds" onChange={e => changePounds(e)} disabled={poundsInput}></input>
      </label>
        
      <label className='form-label' style={{ display: 'flex', flexDirection: 'column' }}>
        <h3>Kilograms</h3>
        <input type="text" className="kilograms" onChange={e => changeKilo(e)}  disabled={kiloInput}/>
      </label>
      
      <label className='form-label' style={{ display: 'flex', flexDirection: 'column' }}>
        <h3>Stone</h3>
        <input type="text" className="stone" onChange={e => changeStone(e)}  disabled={stoneInput}/>
      </label>

<<<<<<< HEAD
      <button className='formbtn' type='button' onSubmit={test}>Submit</button>
=======
      <button className='formbtn' type='button' onSubmit={sendGrams}>Submit</button>
>>>>>>> dev
    </form>
  )
}

export default WeightForm
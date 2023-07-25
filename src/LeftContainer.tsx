//import Kilogram Form, pounds form, stone form
import React from 'react'
import WeightForm from './WeightForm.tsx'
import {StyleSheet, View, Text} from 'react-native'

const LeftContainer = (props) => {
  const { kilo, setKilo, pound, setPound, stone, setStone, reset } = props

  return (
    <div id="left-container">
    <WeightForm kilo={kilo} setKilo={setKilo} pound={pound} setPound={setPound} stone={stone} setStone={setStone} />
    </div>
  )
}

//<View style={{ backgroundColor: 'blue', padding: 10 }}>
{/* <Text style={{ color: 'white', fontSize: 18 }}>Hello, React Native!</Text>
</View> */}



export default LeftContainer
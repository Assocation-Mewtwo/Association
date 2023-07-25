//import Kilogram Form, pounds form, stone form
import React from 'react'
import WeightForm from './WeightForm.tsx'
import {StyleSheet, View, Text} from 'react-native'

const LeftContainer = () => {
       
//   const forms = [];
//   const units = ['Kilograms', 'Pounds', 'Stone'];
//   for (let i = 0; i < units.length; i++) {
//     forms.push(<WeightForm unit={units[i]}/>)
//   };

  return (
    <div className="leftContainer" style={{ display: 'flex', flexDirection: 'row', }}>
    <WeightForm />
    </div>
  )
}

//<View style={{ backgroundColor: 'blue', padding: 10 }}>
{/* <Text style={{ color: 'white', fontSize: 18 }}>Hello, React Native!</Text>
</View> */}



export default LeftContainer
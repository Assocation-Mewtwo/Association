//import Kilogram Form, pounds form, stone form
import React from 'react'
import WeightForm from './WeightForm.tsx'
import {StyleSheet, View, Text} from 'react-native'

const LeftContainer = () => {
    

  const styles = StyleSheet.create({
    container: {
      backgroundColor: 'blue',
      padding: 10,
    },
  });
    
  const forms = [];
  const units = ['Kilograms', 'Pounds', 'Stone'];
  for (let i = 0; i < units.length; i++) {
    forms.push(<WeightForm unit={units[i]}/>)
  };

  return (
    <View style={styles.container}>
    {forms}
    </View>
  )
}

//<View style={{ backgroundColor: 'blue', padding: 10 }}>
{/* <Text style={{ color: 'white', fontSize: 18 }}>Hello, React Native!</Text>
</View> */}



export default LeftContainer
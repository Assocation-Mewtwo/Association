import React from 'react'
import {StyleSheet, View, Text} from 'react-native'


const WeightForm = (props) => {

  const {unit} = props;

  return (
    <View>
      <Text>{unit}</Text>
    </View>
  )
}

export default WeightForm